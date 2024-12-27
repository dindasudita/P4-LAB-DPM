import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import SkorBoard from './src/components/SkorBoard';

const App = () => {
  const [scores, setScores] = useState({ A: 0, B: 0 });
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (scores.A >= 10) {
      setWinner('Tim A');
    } else if (scores.B >= 10) {
      setWinner('Tim B');
    }
  }, [scores]);

  const handleScoreChange = (team, change) => {
    if (winner) return;
    
    const newScore = scores[team] + change;
    if (newScore < 0) return;
    
    setScores(prev => ({
      ...prev,
      [team]: newScore
    }));
  };

  const handleReset = () => {
    setScores({ A: 0, B: 0 });
    setWinner(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SkorBoard
          teamA="Tim A"
          teamB="Tim B"
          scoreA={scores.A}
          scoreB={scores.B}
          onScoreChange={handleScoreChange}
          onReset={handleReset}
          winner={winner}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  }
});

export default App;