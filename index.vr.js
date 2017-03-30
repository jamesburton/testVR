import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Box,
  AmbientLight,
} from 'react-vr';

class MyBox extends React.Component {
  // A demonstration of Box
  // See https://facebook.github.io/react-vr/docs/box.html
  render() {
    var width = 1;
    var depth = 1.2;
    var height = 0.3;
    return <Box 
      width={width} 
      height={height} 
      depth={depth} 
      style={{
        color: '#2222cc'
        , transform: [{translate: [1, 0, -2]}]
      }}
      />;
  }
}

export default class testVR extends React.Component {
  render() {
    return (
      <View>
        {/*
        <Pano source={asset('chess-world.jpg')}/>
        */}
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
        <AmbientLight intensity={0.3} />
        <MyBox />
      </View>
    );
  }
};

AppRegistry.registerComponent('testVR', () => testVR);
