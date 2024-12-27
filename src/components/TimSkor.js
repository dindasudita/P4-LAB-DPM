import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TimSkor = ({ teamName, score, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton]}
          onPress={onDecrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]}
          onPress={onIncrement}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  decrementButton: {
    backgroundColor: '#ffa500',
  },
  incrementButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TimSkor;
