var myComponent = React.createClass({
	
		render: function() {
			React.Children.map(this.props.children, function (child) {
				console.log(child);
			});
			return (
				<div>
				{this.props.name}
				</div>)
		}
});

React.render(<myComponent name="Steven">
	<p key="first">a child</p>
	<p key="second">another</p>
</myComponent>,document.getElementById('container'));