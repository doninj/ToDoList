import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class CheckBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', marginVertical: 3 }}>
        <TouchableOpacity
          style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.checked ? 'skyblue' : 'transparent', borderWidth: 0.5 }}
          onPress={this.props.handleClick}>
          {this.props.checked && <Ionicons name="md-checkmark" size={15} color="white" />}
        </TouchableOpacity>
        <Text style={{ marginLeft: 5 }}>{this.props.label}</Text>
      </View>
    );
  }
}

export default CheckBox;