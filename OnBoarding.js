import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Onboarding = ({ navigation }) => {
  return (
    <LinearGradient colors={['#ffffff', '#4b3832']} style={styles.container}>
      <Image source={require('../assets/abc.png')} style={styles.image} />
      <Text style={styles.title}> "A quiz is just a chance to showcase what you know,
      so approach it with confidence and a curious mind."</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LevelSelection')}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
   
   
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 200,
  },
  button: {
    backgroundColor: 'grey',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    
  },
  title:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:-100,
    position:'absolute',
    top:'50%',
    left:'65%',
    width:200,
    transform:[{translateX:-100},{translateY:150}],

    
  }
});

export default Onboarding;