var MyComponent = React.createClass({
	
	render: function() {
		return (
			<div>
				{this.props.name}
			</div>)
	}
});

React.render(<MyComponent name= "Steven" / >, document.getElementById('container'));