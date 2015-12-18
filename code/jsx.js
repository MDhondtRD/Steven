//JSX versie

React.render(
		<div>
			<h1> Hello </h1>
		</div>
	);
	
//wordt vertaald naar

React.render(
		React.createElement('div', null,
			React.createElement('h1', null, 'Hello')
		);
	);