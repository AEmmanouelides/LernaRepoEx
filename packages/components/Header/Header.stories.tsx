import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    label: { control: 'text' },
    headerStyles: Object
  },
};

const Template = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.args = {
  headerStyles: {
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
  },
  label: 'Pokemons',
};

