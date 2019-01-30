import React from 'react';
import ReactDOM from 'react-dom';
import { Scorebook } from './Scorebook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scorebook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
