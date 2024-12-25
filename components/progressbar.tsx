import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const ProgressBarComponent = ({ title, progress, color }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ProgressBar progress={progress} color={color} style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
  },
});

export default ProgressBarComponent;
