var SetIntervalMixin = {
	componentWillMount: function() {
		this.intervals = [];
	},
	setInterval: function() {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function() {
		this.intervals.map(clearInterval);
	}
};

var MyComponent = React.createClass({
		mixins: [SetIntervalMixin], // Use the mixin
		getInitialState: function() {
			return ({seconds: 0, name: "Steven"});
		},
		componentDidMount: function() {
			this.setInterval(this.tick, 1000); // Call a method on the mixin
		},
		tick: function() {
			this.setState({seconds: this.state.seconds + 1});
		},
		render: function() {
			return (
				<div>
				<h1>Hello {this.state.name}</h1>
				<p>
					MyComponent has been running for {this.state.seconds} seconds.
				</p>
				</div>
			);
		}
});

React.render(<MyComponent / >, document.getElementById("root"));