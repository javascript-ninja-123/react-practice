var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstname = 'andrew';
// name={firstname}
var man = 'This is a man"s message';

ReactDOM.render(
	<Greeter message={man} name={firstname} />,
	document.getElementById('app')


);
