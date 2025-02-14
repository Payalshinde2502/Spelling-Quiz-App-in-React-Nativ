import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const levels = ['Easy', 'Medium', 'Hard']; // Define your levels here

const ResultScreen = ({ route, navigation }) => {
  const { score, totalQuestions, currentLevel } = route.params;

  const currentLevelIndex = levels.indexOf(currentLevel);
  const nextLevel = levels[currentLevelIndex + 1];

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.resultText}>Quiz Completed!</Text>
        <Text style={styles.scoreText}>
          Your Score: {score} / {totalQuestions}
        </Text>
        {score === totalQuestions && (
          <Text style={styles.excellentText}>🎉🎉 Excellent 🎉🎉</Text>
        )}
        {nextLevel ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Quiz', { level: nextLevel })}
          >
            <Text style={styles.buttonText}>Proceed to {nextLevel} Level</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LevelSelection')}
          >
            <Text style={styles.buttonText}>Back to Level Selection</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 20,
  },
  resultText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'white' },
  scoreText: { fontSize: 20, marginBottom: 20, color: 'white' },
  excellentText: { fontSize: 22, fontWeight: 'bold', color: 'yellow', marginBottom: 20 },
  button: { backgroundColor: 'grey', padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { color: 'black', fontSize: 18 },
});

export default ResultScreen;
