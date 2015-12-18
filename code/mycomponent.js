var MyComponent = React.createClass({
	
	render: function() {
		return (<div>Hello world</div>);
	}
	
});
React.render( <MyComponent / > , document.getElementById('container'));