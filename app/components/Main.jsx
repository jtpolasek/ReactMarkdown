var React = require ('react');
var Output = require('Output');
var Input = require ('Input');
var Nav = require ('Nav');
var marked = require ('Marked');

var Main = React.createClass({
  getInitialState: function() {
		return {
			content: '',
      parsed: {
          __html: ''
      }
		}
	},
  convertMarkup: function(text) {
		marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false,
		})
		var rawMarkup = marked(text, {sanitize: true})
    console.log(rawMarkup, "markeup");
    this.setState({
      content: rawMarkup,
      parsed:{
        __html: rawMarkup
       }
    });
		return {
			__html: rawMarkup
		}
	},
  render: function (){
    return(
      <div>
        <div className="row">
          <Nav/>
        </div>
        <div className="row">
          <div className="column medium-6 large-6  text-center input">
            <Input input={this.convertMarkup}/>
          </div>
          <div className="column medium-6 large-6 output">
            <Output parsedHtml={this.state.parsed}/>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Main;
