import { Grid } from './Grid';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    data: Object
  },
};

const Template = (args) => <Grid {...args} />;

export const Main = Template.bind({});
Main.args = {
    data: {
        results: [
            {
                id: 1,
                name: 'bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon/1/'
            },
            {
                id: 2,
                name: 'ivysaur',
                url: 'https://pokeapi.co/api/v2/pokemon/2/'
            },
            {
                id: 3,
                name: 'venusaur',
                url: 'https://pokeapi.co/api/v2/pokemon/3/'
            },
            {
                id: 4,
                name: 'charmander',
                url: 'https://pokeapi.co/api/v2/pokemon/4/'
            }
        ],
        count: 4,

    }
};

