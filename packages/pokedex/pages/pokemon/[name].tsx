import { Pokemon } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { CircularProgress } from '@mui/material'

function PokemonPage({ selectedPokemon, loading }: any) {
const selectedPokemonRed = useSelector((state: any) => state?.selectedPokemon?.selectedPokemon ?? selectedPokemon);
const loadingRed = useSelector((state: any) => state?.selectedPokemon?.loading ?? loading);
const router = useRouter();
  
const handleBackClick = () => {
    router.push('/')
} 

  return (<div>
    {
        loadingRed ? <CircularProgress /> : 
        <Pokemon selectedPokemon={selectedPokemonRed} handleBackClick={handleBackClick}/>  
    }
  </div>
  )}

  PokemonPage.getInitialProps = async (context: any) => {
    const state = context?.store
    const selectedPokemon = state?.selectedPokemon?.selectedPokemon;
    const loading = state?.selectedPokemon?.loading;

    return { selectedPokemon, loading };
  };
  
  export default PokemonPage;