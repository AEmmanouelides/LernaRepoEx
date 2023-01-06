import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid'
import { useState } from 'react';
import { takeData } from 'utils';
import { Pokemon } from 'utils/interfaces/types';

export const Grid = (props: any) => {
    const [pokemons, setPokemons] = useState(props?.data?.results || []);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [totalCount, setTotalCount] = useState(props?.data?.count || 0);
    const [loading, setLoading] = useState(false);

    const columns: GridColDef[] = [
        {
          field: 'name',
          sortable: false,
          width: 160,
          renderHeader: () => (<div>Name</div>),
          valueGetter: (params: GridValueGetterParams) =>
            `${params?.row?.name[0].toUpperCase() + params?.row?.name.slice(1)}`
        },
        {
            field: 'url',
            sortable: false,
            width: 300,
            renderHeader: () => ( <div>Link</div>),
            valueGetter: (params: GridValueGetterParams) =>
              `${params?.row?.url || ''}`,
          }
     ];

    const onRowsSelectionHandler = (ids: GridRowId[]) => {
        const selectedPokemon = pokemons.find((pokemon: Pokemon) => pokemon?.name === ids[0])
        props?.handlePokemonClick(selectedPokemon?.name, selectedPokemon?.url)
    };
    
    const fetchData = async (page: number) => {
        setLoading(true);
        const offset = page * pageSize
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`
        const response = await takeData(url)
        setPokemons(response?.results)
        setTotalCount(response?.count)
        setLoading(false);
        setPage(page)
    };
    
    return (
        <DataGrid
                autoHeight 
                rows={pokemons}
                rowCount={totalCount}
                getRowId={row => row.name}
                columns={columns}
                onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                pageSize={pageSize}
                page={page}
                pagination
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                onPageChange={(page) => fetchData(page)}
                rowsPerPageOptions={[20]}
                loading={loading}
                paginationMode='server'
        />
    )
}

