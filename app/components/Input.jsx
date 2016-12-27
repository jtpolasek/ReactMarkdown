var React = require ('react');

var Input = React.createClass({
  handleChange: function(event) {
	   this.props.input(event.target.value)
	},
  render: function (){
    return(
          <textarea className="markdown" placeholder="## Enter Text Here" onChange={this.handleChange}></textarea>
    )
  }
})

module.exports = Input;
