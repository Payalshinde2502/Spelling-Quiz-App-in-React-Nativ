import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { shuffleArray } from '../utils/helper';
import LinearGradient from 'react-native-linear-gradient';

const QuizCard = ({ questionData, onAnswerSelected }) => {
  const [options, setOptions] = useState(shuffleArray([...questionData.options]));
  const [selected, setSelected] = useState(null);
  const glowAnimation = new Animated.Value(0);

  useEffect(() => {
    setOptions(shuffleArray([...questionData.options])); // Shuffle options when question changes
  }, [questionData]);

  const handleAnswer = (answer) => {
    setSelected(answer);
    const isCorrect = answer === questionData.correct;

    Animated.timing(glowAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(glowAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
        onAnswerSelected(answer);
        setSelected(null);
      }, 1000);
    });
  };

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <Text style={styles.question}>{questionData.question}</Text>
      {options.map((option, index) => {
        const isSelected = selected === option;
        const isCorrect = option === questionData.correct;

        return (
          <Animated.View
            key={index}
            style={[
              styles.optionWrapper,
              isSelected && isCorrect && styles.correctGlow,
              isSelected && !isCorrect && styles.wrongGlow,
            ]}
          >
            <TouchableOpacity
              style={[
                styles.option,
                isSelected && isCorrect ? styles.correct : null,
                isSelected && !isCorrect ? styles.wrong : null,
              ]}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  option: {
    width: '90%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  optionText: {
    fontSize: 18,
    color: '#ffffff',
  },
  correct: {
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    borderColor: '#00ff00',
  },
  wrong: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderColor: '#ff0000',
  },
  correctGlow: {
    shadowColor: '#00ff00',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  wrongGlow: {
    shadowColor: '#ff0000',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default QuizCard;
