import Sound from 'react-native-sound';

let backgroundMusic;

const playBackgroundMusic = () => {
  backgroundMusic = new Sound(require('../assets/music.mp3'), Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Failed to load sound', error);
      return;
    }
    backgroundMusic.setNumberOfLoops(-1); // Loop infinitely
    backgroundMusic.play();
  });
};

const stopBackgroundMusic = () => {
  if (backgroundMusic) {
    backgroundMusic.stop();
  }
};

export { playBackgroundMusic, stopBackgroundMusic };