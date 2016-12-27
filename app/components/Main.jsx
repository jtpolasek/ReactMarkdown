var React = require ('react');
var Output = require('Output');
var Input = require ('Input');

var Main = React.createClass({
  render: function (){
    return(
      <div>
        <h1>Main component</h1>
        <Input/>
        <Output/>
      </div>
    )
  }
})

module.exports = Main;
