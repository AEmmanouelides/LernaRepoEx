import React, { useEffect, useState } from 'react';
import { Grid, Header } from 'components';
import { takeData } from 'utils';
import { useDispatch } from 'react-redux';
import { setData, setLoading, setSelected } from '../store/store';
import { useRouter } from 'next/router';

const headerStyles = {
  header: {
      backgroundColor: 'lightblue',
      paddingBottom: '10px',
      paddingTop: '10px',
      paddingLeft: '0px',
      display: 'flex',
      justifyContent: 'center'
  },
  title: {
      margin: 'auto',
  },
};
export const Index = () => {
  const [pokemons, setPokemons] = useState(undefined);
  const router = useRouter();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const fetchData = async (link: string) => {
    const response = await takeData(link);
    setPokemons(response);
    dispatch(setData(response));
  };

  const fetchSelected = async (link: string) => {
    dispatch(setLoading(true));
    const response = await takeData(link);
    dispatch(setSelected(response));
  };

  useEffect(() => {
    fetchData('https://pokeapi.co/api/v2/pokemon');
  }, []);

  useEffect(() => {
    const pageFromQuery = Number(router.query.page);
    if (pageFromQuery) {
      setPage(pageFromQuery);
    }
  }, [router.query.page]);

  const handlePokemonClick = (pokemonName: string, pokemonURL: string) => {
    fetchSelected(pokemonURL)
    router.push({
      pathname: `/pokemon/[name]`,
      query: { name: pokemonName }
    })
  } 

  return (
    <div className='root'>
      <Header headerStyles={headerStyles} label={'Pokemons'}/>
      {!!pokemons && (
        <>
          <Grid data={pokemons} handlePokemonClick={handlePokemonClick} page={page} />
        </>
      )}
    </div>
  );
};

export default Index;
