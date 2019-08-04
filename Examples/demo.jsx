import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <Hello name="Taylor" />,
  document.getElementById('hello-example')
);








import React, { Component } from 'react';
import { View } from 'react-native';

class HelloReactNative extends Component {
  render() {
    return (
      <View>
        Hello {this.props.name}/
      </View>
    );
  }
}
