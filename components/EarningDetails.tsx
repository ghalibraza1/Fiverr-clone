import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// EarningsDetails Component
const EarningsDetails = () => (
  <View style={styles.detailsContainer}>
    <Text style={styles.detailsText}>Earnings to Date Details</Text>
  </View>
);

// EarningDetails Component
const EarningDetails = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Available for Withdrawal */}
       {/* Available for Withdrawal */}
       <View style={styles.withdrawalSection}>
        <Text style={styles.sectionTitle}>Available for Withdrawal</Text>
        <Text style={styles.value}>$0</Text>
      </View>

      {/* Analytics Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Analytics</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Earnings in December:</Text>
          <Text style={styles.value}>$0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Active Orders:</Text>
          <Text style={styles.value}>0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Average Selling Price:</Text>
          <Text style={styles.value}>$0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Completed Orders:</Text>
          <Text style={styles.value}>$0</Text>
        </View>
      </View>

      {/* Revenues Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Revenues</Text>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('EarningsDetails')}
        >
          <Text style={styles.label}>Payments Being Cleared:</Text>
          <Text style={styles.value}>$0</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('EarningsDetails')}
        >
          <Text style={styles.label}>Earnings to Date:</Text>
          <Text style={styles.value}>$0</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Expenses to Date:</Text>
          <Text style={styles.value}>$0</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Withdrawn to Date:</Text>
          <Text style={styles.value}>$0</Text>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  section: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  withdrawalSection: {
    backgroundColor: '#4caf50',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: '#aaa',
    fontSize: 16,
    width: '70%', // Adjust width to ensure alignment
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
    width: '20%', // Fixed width to align values
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  detailsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EarningDetails;
