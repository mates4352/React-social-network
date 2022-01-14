import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import {dataPost} from "./index";
import {personal} from "./index";
import {dataMessage} from "./index";

test('renders learn react link', () => {
  render(
      <App
        datePost={dataPost}
        personal={personal}
        dataMessage={dataMessage}/>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
