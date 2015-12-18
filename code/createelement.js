var MyComponent = React.createClass({
		displayName: "MyComponent",
		render: function() {
			return React.createElement(
				"div",
				null,
				this.props.name);
		}
});
React.render(React.createElement(MyComponent, {name: "Steven"}),
document.getElementById('container'));