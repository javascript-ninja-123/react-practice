var React = require('react');


var GreeterMessage =React.createClass({
	render(){
		var name = this.props.name;
		var message = this.props.message;
		return(
				<div>
					<h1>Some {name}</h1>
					<p>Some {message}</p>
				</div>
		);
	}
});

module.exports = GreeterMessage;
