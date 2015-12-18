var MyComponent = React.createClass({
	
		getInitialState: function() {
			return (
				{name : "Steven"}
			)
		},
		render: function() {
			return (
				<div>Hello {this.state.name}</div>
			);
		}
		
});
React.render(<MyComponent/ >, document.getElementById("root"));