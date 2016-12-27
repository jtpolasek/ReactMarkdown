var React = require ('react');

var Output = React.createClass({
  render: function (){
    var innerHtml = this.props.parsedHtml;
    console.log(innerHtml);
    return(
        <div dangerouslySetInnerHTML={innerHtml}>
        </div>
    )
  }
})

module.exports = Output;
