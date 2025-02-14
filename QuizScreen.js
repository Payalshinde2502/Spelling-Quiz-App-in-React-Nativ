 import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Timer from '../components/Timer';
import QuizCard from '../components/QuizCard';
import { shuffleArray } from '../utils/helper';
import questionsData from '../data/question';

const QuizScreen = ({ navigation, route }) => {
  const { level = 'Easy' } = route.params || {};
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const filteredQuestions = questionsData.filter(q => q.level === level);
    setQuestions(shuffleArray(filteredQuestions).slice(0, 3));
  }, [level]);

  const handleNextQuestion = (selectedAnswer) => {
    let updatedScore = score;
    if (selectedAnswer === questions[currentQuestion]?.correct) {
      updatedScore += 1;
      setScore(updatedScore);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigation.navigate('Result', {
          score: updatedScore,
          totalQuestions: questions.length,
          currentLevel: level,
        });
      }
    }, 1000);
  };

  if (questions.length === 0) {
    return (
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.gradient}>
        <View style={styles.container}>
          <Text style={styles.errorText}>No questions available for this level.</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.gradient}>
      <View style={styles.container}>
        <Timer key={currentQuestion} onComplete={() => handleNextQuestion(null)} />
        <QuizCard questionData={questions[currentQuestion]} onAnswerSelected={handleNextQuestion} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});

export default QuizScreen;
