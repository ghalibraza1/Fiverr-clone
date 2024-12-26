import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ShareGigsPage() {
  const navigation = useNavigation();

  const gigs = [
    {
      id: "1",
      title: "Create mobile application in React Native",
      image: require("@/assets/images/create.jpg"),
    },
    {
      id: "2",
      title: "Develop a cross-platform app in React Native",
      image: require("@/assets/images/develop-a-cross-platform-app-using-react-native-expo.jpg"),
    },
    {
      id: "3",
      title: "I will fix React Native Expo errors",
      image: require("@/assets/images/fix-react-native-and-expo-bugs-for-flawless-app-performance.jpg"),
    },
  ];

  const handleNavigation = (gig) => {
    navigation.navigate("SingleGigs");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Share Your Gigs</Text>

      {/* Gigs */}
      {gigs.map((gig) => (
        <TouchableOpacity
          key={gig.id}
          style={styles.gigBox}
          onPress={() => handleNavigation(gig)}
        >
          <Image source={gig.image} style={styles.gigImage} />
          <View style={styles.gigDetails}>
            <Text style={styles.gigTitle}>{gig.title}</Text>
            <Text style={styles.gigPrice}>$100</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Get More Traffic Section */}
      
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  gigBox: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  gigImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  gigDetails: {
    flex: 1,
  },
  gigTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  gigPrice: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 5,
  },
  footerSection: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  boxImageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  boxImage: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  featureAppText: {
    fontSize: 14,
    color: "#bbb",
    textAlign: "center",
    marginTop: 10,
  },
});
