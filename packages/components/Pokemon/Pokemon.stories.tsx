import { Pokemon } from './Pokemon';

export default {
  title: 'Pokemon',
  component: Pokemon,
  argTypes: {
    selectedPokemon: Object,
    handleBackClick: Function
  },
};

const Template = (args) => <Pokemon {...args} />;

export const Main = Template.bind({});
Main.args = {
    selectedPokemon: {
        id: 1,
        name: 'Pikatchu',
        height: 46,
        weight: 52,
        abilities: [{
            ability: {
                name: 'ahk'
            }
        }]
    },
    handleBackClick: undefined,
};

