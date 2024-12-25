import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { popularServices } from '@/components/services';

const { width } = Dimensions.get('window');

const HomePage: React.FC = () => {
  const isDarkMode = useColorScheme() === "dark";
  const navigation = useNavigation();

  
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/FIVERLOGO.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Trending')}>
          <MaterialIcons name="diamond" size={24} color="#1dbf73" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TouchableOpacity style={styles.searchBar}
      onPress={() => navigation.navigate('search')}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Search services</Text>
      </TouchableOpacity>

      {/* Popular Services Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Services</Text>
        <TouchableOpacity style={styles.serviceButton} 
        onPress={() => navigation.navigate('services')}>
        <Text style = {styles.seeMoreBtn} >  see more </Text>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularServices.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <Image source={{ uri: service.image }} style={styles.serviceImage} />
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.servicePrice}>Starting at {service.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Made on Fiverr */}
      <TouchableOpacity style={styles.madeOnFiverr}>
        <Image 
          source={{ uri: 'https://picsum.photos/400/200' }}
          style={styles.madeOnFiverrImage}
        />
        <View style={styles.overlayText}>
          <Text style={styles.madeOnFiverrTitle}>Made on Fiverr</Text>
          <Text style={styles.madeOnFiverrSubtitle}>See what's possible</Text>
        </View>
      </TouchableOpacity>

      {/* Invite Friends */}
      
        <View style={styles.inviteContent}>
          <Text style={styles.inviteTitle}>Invite Friends</Text>
          <Text style={styles.inviteText}>
            Get up to $100 for each friend you invite
          </Text>
          <View style={styles.inviteButton}>
          <TouchableOpacity style={styles.inviteBox}>
            <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>


      {/* What's New */}
      <View style={styles.whatsNewSection}>
        <Text style={styles.sectionTitle}>What's New on Fiverr</Text>
        <TouchableOpacity style={styles.whatsNewItem}>
          <Ionicons name="star" size={24} color="#1dbf73" />
          <View style={styles.whatsNewContent}>
            <Text style={styles.whatsNewTitle}>AI Services</Text>
            <Text style={styles.whatsNewDescription}>
              Explore AI-powered services
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsNewItem}>
          <Ionicons name="bulb" size={24} color="#1dbf73" />
          <View style={styles.whatsNewContent}>
            <Text style={styles.whatsNewTitle}>Fiverr Pro</Text>
            <Text style={styles.whatsNewDescription}>
              Top rated professionals
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 85,
    height: 25,
    resizeMode: 'contain',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  servicesButton:{
    flexDirection: 'row',
  },

  serviceCard: {
    width: 200,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  serviceInfo: {
    padding: 10,
  },
  seeMoreBtn: {
  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  serviceButton:{
     justifyContent:'center'
  },
  overlayText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  madeOnFiverrTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  madeOnFiverrSubtitle: {
    color: '#fff',
    fontSize: 16,
  },
  inviteBox: {
    // margin: 10,
    // padding: 10,
    //backgroundColor: '#f5f5f5',
    //.borderRadius: 8,
  },
  inviteContent: {
    alignItems: 'center',
  },
  inviteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inviteText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
  },
  inviteButton: {
    backgroundColor: '#1dbf73',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  whatsNewSection: {
    padding: 15,
  },
  whatsNewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  whatsNewContent: {
    flex: 1,
    marginLeft: 15,
  },
  whatsNewTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  whatsNewDescription: {
    color: '#666',
  },
});
export default HomePage;
