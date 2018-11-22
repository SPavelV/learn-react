//npm install -g webpack
//npm install babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0 --save-dev
//npm install react react-dom --save

import React from 'react';
import {render} from 'react-dom';
import Menu from './components/Menu';
import data from '../data/recipes';

window.React = React;

render(
  <Menu recipes={data} />,
  document.getElementById('react-container')
);