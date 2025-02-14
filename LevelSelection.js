import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LevelSelection = ({ navigation }) => {
  const selectLevel = (level) => {
    navigation.navigate('Quiz', { level });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Level</Text>
      <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate('Quiz',{level:'Easy'})}>
        <Text style={styles.buttonText}>Level 💣 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz',{level:'Medium'})}>
        <Text style={styles.buttonText}>Level 💣💣</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz',{level:'Hard'})}>
        <Text style={styles.buttonText}>Level 💣💣💣</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default LevelSelection;
