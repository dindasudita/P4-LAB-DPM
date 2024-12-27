import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WinnerMessage = ({ winner }) => {
  if (!winner) return null;
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{winner} MENANG! 🏆</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4caf50',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WinnerMessage;