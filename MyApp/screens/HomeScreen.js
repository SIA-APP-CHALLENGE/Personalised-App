import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View} from 'react-native';
import Title from './title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='Personali-FLY by SIA' />
     
      <TouchableOpacity onPress={()=>navigation.navigate('Game')}>
        <Image style={styles.imagestyle} source={require('./my-icon.jpg')} />
      </TouchableOpacity>

      <View style={styles.bannerContainer}>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Match Products with Personality</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Test')}
        style={styles.button}>
        <Text style={styles.buttonText}>Match Places with Personality</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },

  imagestyle: {
    flex: 1,
    width:200,
    height:200,
    alignItems:'center',
    justifyContent:'center'

  }
});
