import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PokemonDetails, PokemonAbilities } from 'utils/interfaces/types';

export const Pokemon = (props: {selectedPokemon: PokemonDetails, handleBackClick: Function}) => {
    const { selectedPokemon } = props
    return (
        <div data-testid="pokemonContainer" className="container">
            <Card sx={{ minWidth: 275 }} variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Id: {selectedPokemon?.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {selectedPokemon?.name[0].toUpperCase() + selectedPokemon?.name.slice(1)}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Height: {selectedPokemon?.height} - Weight: {selectedPokemon?.weight}
                    </Typography>
                    <Typography variant="body2">
                        <div>Abilities: </div>
                        {selectedPokemon?.abilities?.map((x: PokemonAbilities, index: number) => {
                            return (<div key={index}>{x?.ability?.name}</div>)
                        })}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => props?.handleBackClick()}>BACK</Button>
                </CardActions>
            </Card>
        </div>
    );
};
