import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

export default class Game extends React.Component { 
    render() {
        return (
            <ImageBackground source={require('./bali.jpeg')}
            style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> Explore the Map of Bali to discover hidden treasures!</Text>
            </ImageBackground>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });