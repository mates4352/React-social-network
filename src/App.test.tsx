import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addPost, changeValueTextarea} from "./redux/state";

import {state} from "./redux/state";

test('renders learn react link', () => {
  render(
      <App state={state} changeValueTextarea={changeValueTextarea} addPost={addPost}/>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
