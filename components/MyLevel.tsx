import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const MyLevel = () => {
  // Example values for progress and targets
  const successScore = 0.6; // 60%
  const rating = 0.88; // 4.4/5
  const responseRate = 0.8; // 80%
  const orders = '0 / 5';
  const uniqueClients = '0 / 3';
  const earnings = '$0 / $400';

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Your Level</Text>
        <Text style={styles.subTitle}>Performance Metrics and Targets</Text>
      </View>

      {/* Performance Metrics */}
      <View style={styles.metricBox}>
  <Text style={styles.metricTitle}>Performance Metrics</Text>

  {/* Success Score */}
  <View style={styles.metricItem}>
    <Text style={styles.metricText}>Success Score</Text>
    <ProgressBar progress={successScore} color="#4caf50" style={styles.progressBar} />
    <Text style={styles.levelTarget}>Level 1: 5 | Level 2: 20 | Top Rated: 40</Text>
  </View>

  {/* Rating */}
  <View style={styles.metricItem}>
    <Text style={styles.metricText}>Rating</Text>
    <ProgressBar progress={rating} color="#2196F3" style={styles.progressBar} />
    <Text style={styles.levelTarget}>Level 1: 5 | Level 2: 20 | Top Rated: 40</Text>
  </View>

  {/* Response Rate */}
  <View style={styles.metricItem}>
    <Text style={styles.metricText}>Response Rate</Text>
    <ProgressBar progress={responseRate} color="#ff9800" style={styles.progressBar} />
    <Text style={styles.levelTarget}>Level 1: 5 | Level 2: 20 | Top Rated: 40</Text>
  </View>
</View>

      {/* Orders */}
      <View style={styles.metricBox}>
        <Text style={styles.metricTitle}>Orders</Text>
        <Text style={styles.metricText}>{orders}</Text>
        <Text style={styles.levelTarget}>Level 1: 5 | Level 2: 20 | Top Rated: 40</Text>
      </View>

      {/* Unique Clients */}
      <View style={styles.metricBox}>
        <Text style={styles.metricTitle}>Unique Clients</Text>
        <Text style={styles.metricText}>{uniqueClients}</Text>
        <Text style={styles.levelTarget}>Level 1: 3 | Level 2: 10 | Top Rated: 20</Text>
      </View>

      {/* Earnings */}
      <View style={styles.metricBox}>
        <Text style={styles.metricTitle}>Earnings</Text>
        <Text style={styles.metricText}>{earnings}</Text>
        <Text style={styles.levelTarget}>Level 1: $400 | Level 2: $2000 | Top Rated: $10,000</Text>
      </View>

      {/* Button to go back */}
      {/* <TouchableOpacity style={styles.button} onPress={() => alert('Go back')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#bbb',
    fontSize: 16,
    marginTop: 10,
  },
  metricBox: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  metricTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  metricText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  metricItem: {
    marginBottom: 20, // Add space between items
  },
  
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  levelTarget: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MyLevel;
