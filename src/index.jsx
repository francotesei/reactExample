var ReactDOM = require('react-dom');
var React = require('react');
var Hello = require('./test.jsx');


ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
