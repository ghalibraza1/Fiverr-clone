import React from "react";
import { View, Text, StyleSheet, FlatList, Alert, Image } from "react-native";
import GigComponent from "@/components/GigComponent";

export default function ShareGigsPage() {
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

  const handleShare = (title) => {
    Alert.alert("Gig Shared", `You have shared: ${title}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Share Your Gigs</Text>

      {/* Gigs FlatList */}
      <FlatList
        data={gigs}
        renderItem={({ item }) => (
          <GigComponent
            title={item.title}
            image={item.image}
            onShare={() => handleShare(item.title)}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />

      {/* Get More Traffic Section */}
      <View style={styles.footerSection}>
        <Text style={styles.footerHeading}>Get More Traffic</Text>
        {/* Box Image */}
        <View style={styles.boxImageContainer}>
          <Image
            source={require("@/assets/images/marketing-image.jpeg")} // Replace with the actual image path
            style={styles.boxImage}
          />
        </View>
        {/* Feature App Section */}
        <Text style={styles.featureAppText}>
          Want more buyers from social media? Create a marketing video with a boosted app.
        </Text>
      </View>
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
  flatList: {
    marginTop: 10,
  },
  footerSection: {
    marginTop: 15, // Reduced margin to move the footer upwards
    paddingVertical: 15, // Reduced padding for a tighter look
    paddingHorizontal: 10,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10, // Reduced space below the heading
    textAlign: "center",
  },
  boxImageContainer: {
    alignItems: "center",
    marginBottom: 10, // Reduced space below the image
  },
  boxImage: {
    width: 500,
    height:250,
    borderRadius: 8,
  },
  featureAppText: {
    fontSize: 14,
    color: "#bbb",
    textAlign: "center",
    marginTop: 50, // Reduced space above the text
  },
});
