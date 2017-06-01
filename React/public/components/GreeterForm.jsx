var React = require('react');
var GreeterForm = React.createClass({
	onFormSubmit(e){
		e.preventDefault();

		var name = this.refs.name.value;
		var message = this.refs.message.value;

		if(name.length >0){
			this.refs.name.value ="";

			this.props.onNewName(name);

		}
		if(message.length>0){
				this.refs.message.value ='';
						this.props.onNewArea(message);
		}
	},
	render(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="name" placeholder="name"/><br/>
					<textarea rows='4' placeholder="text area" ref="message"></textarea><br/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
});

module.exports = GreeterForm;
