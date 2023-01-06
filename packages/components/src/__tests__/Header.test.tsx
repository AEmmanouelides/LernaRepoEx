import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../Header/Header';

const headerProps = {
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
}

const renderHeader = () => {
  const rendered = render(<Header {...headerProps}/>);
  return {
    getByTestId: rendered.getByTestId,
  }
}

test("headerContainer exists", () => {
  const { getByTestId } = renderHeader();
  expect(getByTestId("headerContainer")).toBeTruthy();
})

test("headerTitle exists", () => {
  const { getByTestId } = renderHeader();
  expect(getByTestId("headerTitle")).toBeTruthy();
})
