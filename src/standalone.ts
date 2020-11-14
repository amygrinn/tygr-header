import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

export default {
  mount: (el: Element | DocumentFragment | null) => {
    ReactDOM.render(React.createElement(Header), el);
  },
};
