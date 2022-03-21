import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {store} from "./redux/state";

test('renders learn react link', () => {
  render(
      <App state={store.getState()} addPost={store.addPost.bind(store)} changeValueTextarea={store.changeValueTextarea.bind(store)}/>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
