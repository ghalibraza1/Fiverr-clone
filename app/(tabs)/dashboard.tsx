import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBarComponent from '@/components/progressbar';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Hi ghalibraza12</Text>
          <Text style={styles.welcomeText}>Welcome back</Text>
        </View>
        <Image
          style={styles.profilePic}
          source={require('@/assets/images/ghalib.jpg')}
        />
      </View>

      {/* My Level & Progress Bars Section */}
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => navigation.navigate('MyLevel')}
      >
        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <View style={styles.levelBox}>
              <Text style={styles.levelTitle}>My level</Text>
              <Text style={styles.levelValue}>New</Text>
            </View>
          </View>
          <View style={styles.gridItem}>
            <ProgressBarComponent title="Success score" progress={0.3} color="#4caf50" />
          </View>
          <View style={styles.gridItem}>
            <ProgressBarComponent title="Rating" progress={0.5} color="#2196F3" />
          </View>
          <View style={styles.gridItem}>
            <ProgressBarComponent title="Response rate" progress={0.7} color="#ff9800" />
          </View>
        </View>
        <View style={styles.ordersContainer}>
          <Text style={styles.ordersText}>Orders</Text>
          <Text style={styles.ordersValue}>0 / 5</Text>
        </View>
        <View style={styles.ordersContainer}>
          <Text style={styles.ordersText}>Unique clients</Text>
          <Text style={styles.ordersValue}>0 / 3</Text>
        </View>
      </TouchableOpacity>

      {/* Earnings Section */}
      <TouchableOpacity
        style={styles.earningsContainer}
        onPress={() => navigation.navigate('EarningDetails')} // Navigate to EarningsDetails
      >
        <View style={styles.earningsHeader}>
          <Text style={styles.earningsTitle}>Earnings</Text>
          <Text style={styles.detailsButton}>Details</Text>
        </View>
        {/* Earnings Details added directly here */}
        <View style={styles.earningsDetails}>
          <Text style={styles.earningsDetailText}>Available for Withdrawal: $0</Text>
          <Text style={styles.earningsDetailText}>Earnings to Date: $0</Text>
          <Text style={styles.earningsDetailText}>Expenses to Date: $0</Text>
          <Text style={styles.earningsDetailText}>Withdrawn to Date: $0</Text>
        </View>
        <Text style={styles.earningsValue}>$0 / $400</Text>
      </TouchableOpacity>

      {/* TO-DO Section */}
      <View style={styles.todoContainer}>
        <Text style={styles.todoTitle}>TO-DO</Text>
        <View style={styles.unreadMessagesContainer}>
        <Text style={styles.unreadMessagesText}>Unread Messages: 5</Text>
      </View>
      </View>

      {/* Unread Messages Section */}
      

      {/* MY GIGS Section */}
      <View style={styles.myGigsContainer}>
        <View style={styles.gigsHeader}>
          <Text style={styles.gigsTitle}>MY GIGS</Text>
        </View>
        <View style={styles.gigsStats}>
          <Text style={styles.item}>Impressions: 0</Text>
          <Text style={styles.item}>Clicks: 0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#ccc',
    fontSize: 16,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  earningsContainer: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  earningsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  earningsTitle: {
    color: '#fff',
    fontSize: 16,
  },
  detailsButton: {
    color: '#4caf50',
    fontSize: 14,
  },
  earningsDetails: {
    marginTop: 10,
  },
  earningsDetailText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
  },
  earningsValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  todoContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  todoTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  todoText: {
    color: '#ccc',
    fontSize: 14,
  },
  unreadMessagesContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  unreadMessagesText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  myGigsContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  gigsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gigsTitle: {
    color: '#fff',
    fontSize: 16,
  },
  gigsStats: {
    marginTop: 10,
  },
  item: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Dashboard;
