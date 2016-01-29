var ReactDOM = require('react-dom');
var React = require('react');
var Hello = require('./test.js');


ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
