import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import TeamScore from './TimSkor';
import WinnerMessage from './WinnerMessage';

const SkorBoard = ({ teamA, teamB, scoreA, scoreB, onScoreChange, onReset, winner }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require('../assets/soccerBall.jpg')}
          style={styles.ballImage}
        />
        <Text style={styles.title}>Skor Pertandingan Futsal</Text>
        <Image 
          source={require('../assets/soccerBall.jpg')}
          style={styles.ballImage}
        />
      </View>
      
      <TeamScore
        teamName={teamA}
        score={scoreA}
        onIncrement={() => onScoreChange('A', 1)}
        onDecrement={() => onScoreChange('A', -1)}
      />
      
      <View style={styles.vsContainer}>
        <Text style={styles.vsText}>VS</Text>
      </View>
      
      <TeamScore
        teamName={teamB}
        score={scoreB}
        onIncrement={() => onScoreChange('B', 1)}
        onDecrement={() => onScoreChange('B', -1)}
      />
      
      {winner && <WinnerMessage winner={winner} />}
      
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
  ballImage: {
    width: 15,
    height: 30,
    resizeMode: 'contain',
  },
  vsContainer: {
    backgroundColor: '#ff0000',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  vsText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  resetButton: {
    backgroundColor: '#2f45ff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SkorBoard;