import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const Timer = ({ timerKey, onComplete }) => {
  return (
    <CountdownCircleTimer
      key={timerKey} // Use the renamed prop here
      isPlaying
      duration={10}
      colors={['#004777', '#F7B801', '#A30000']}
      colorsTime={[7, 3, 0]}
      onComplete={onComplete}
    >
      {({ remainingTime }) => <Text style={styles.timerText}>{remainingTime}</Text>}
    </CountdownCircleTimer>
  );
};

const styles = StyleSheet.create({
  timerText: { fontSize: 22, fontWeight: 'bold', color:'white' },
});

export default Timer;

