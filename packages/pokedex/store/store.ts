import { configureStore, createSlice, Action } from '@reduxjs/toolkit'
import { Pokemon, PokemonAPIData } from 'utils/interfaces/types'

interface PokemonsState {
  pokemons: PokemonAPIData[]
}
 
const initialState: PokemonsState = { pokemons: [] };

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setData: (state: PokemonsState, action) => {
      state.pokemons = action.payload;
    },
  },
});

interface SelectedPokemonState {
  selectedPokemon?: Pokemon
  loading: boolean
}

const initialSelectedState: SelectedPokemonState = { selectedPokemon: undefined, loading: false };

export const selectedPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: initialSelectedState,
  reducers: {
    setSelected: (state: SelectedPokemonState, action) => {
      state.selectedPokemon = action.payload
      state.loading = false
    },
    setLoading: (state: SelectedPokemonState, action) => {
      state.loading = true;
    },
  },
});

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
    selectedPokemon: selectedPokemonSlice.reducer,
  },
});

export const { setData } = pokemonsSlice.actions;
export const { setSelected, setLoading } = selectedPokemonSlice.actions;

export default store;
