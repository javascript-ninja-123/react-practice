var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
	getDefaultProps(){
		return{
			name:'React',
			message:'Default message'
		}
	},
	getInitialState(){
		return{
			name:this.props.name,
			message:this.props.message
		};
	},

	handleNewName: function(name){
		this.setState({
			name:name
		})
	},
	handleNewArea: function(message){
		this.setState({

					message:message
		})
	},
	render(){
			var name = this.state.name;
			var message = this.state.message;

			return (
				<div>
					<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName} onNewArea={this.handleNewArea}/>
				</div>
			);
	}
});

module.exports = Greeter;
