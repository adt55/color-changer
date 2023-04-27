import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import randomWords from 'random-words';

const HomeScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [randomWord, setRandomWord] = useState('');

  const changeBackgroundColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor('#' + randomColor);
  };

  const generateRandomWord = () => {
    const newWord = randomWords();
    setRandomWord(newWord);
  };

  const handleButtonPress = () => {
    changeBackgroundColor();
    generateRandomWord();
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title="Change background color AND generate random word" onPress={handleButtonPress} />
      {randomWord !== '' && <Text style={styles.text}>{randomWord}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  text: {
    fontSize: 75,
    marginVertical: 20,
  },
});

export default HomeScreen;

