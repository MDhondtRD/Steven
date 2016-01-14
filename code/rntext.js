  //niet geldig    
  <View>
				Hier is geen tekst toegelaten/
      </View>
  //geldig
  <View>
  	<Text>
  		Hier is wel tekst toegelaten.
  	</Text>
  <Text>
  	Ook dit is geldig met een {this.props.child}!
  </Text>
    <Text>
      	Of met een state object zoals  : {this.state.child}!
      </Text>
  </View>