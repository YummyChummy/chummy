const React = require('react');
const ReactDOM = require('react-dom');
require('./styles/index.scss');
var App = require('./components/App');

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
