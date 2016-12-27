var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require ('Main');

//var Main = require('Main');

//Load foundation
$(document).foundation();
//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>
    <p>Boilerplate 3 project</p>
    <Main/>
  </div>,
  document.getElementById('app')
);
