var CameraRoll = require('./camera_roll_example');
var LocalImage = require('./local_image');
  
var App = React.createClass({
  
  render: function(){
		return (
  			//Componenten kunnen gebruikt worden
  			<CameraRoll />
  			<LocalImage />
   )	
	}
  
});