<TouchableHighlight
            onPressIn={this.state.pressing: 'Pressed IN'}
            onPressOut={this.state.pressing: 'Pressed OUT'}
            style={styles.touchable}>
                <View style={styles.button}>
                    <Text style={styles.welcome}>
                        {this.state.pressing}
                    </Text>
                </View>
</TouchableHighlight>