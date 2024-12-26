import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import SingleGis from "@/components/SingleGigs";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("About");
  const [showMore, setShowMore] = useState(false);
  const navigation=useNavigation()
  const handleShare = (title) => {
    Alert.alert("Gig Shared", `You have shared: ${title}`);
  };

  const gigs = [
    {
      id: "1",
      title: "Create mobile application in React Native",
      image: require("@/assets/images/create.jpg"),
      price: "100$",
    },
    {
      id: "2",
      title: "Develop a cross-platform app in React Native",
      image: require("@/assets/images/develop-a-cross-platform-app-using-react-native-expo.jpg"),
      price: "100$",
    },
    {
      id: "3",
      title: "I will fix React Native Expo errors",
      image: require("@/assets/images/fix-react-native-and-expo-bugs-for-flawless-app-performance.jpg"),
      price: "100$",
    },
  ];

  const fullDescription =
    "Professional React Native Mobile App Developer | iOS & Android\n\n" +
    "Are you looking for a professional React Native developer to create or enhance your mobile app? You're in the right place! I specialize in building custom, high-quality mobile apps for iOS and Android platforms that deliver exceptional user experiences.\n\n" +
    "What I Offer:\n\n" +
    "1. Custom Mobile App Development: Turn your ideas into reality.\n" +
    "2. Bug Fixes & Feature Enhancements: Keep your app updated and running smoothly.\n" +
    "3. API Integration: Seamlessly connect to backend services.\n" +
    "4. Performance Optimization: Ensure speed, scalability, and reliability.\n" +
    "5. Modern UI/UX Implementation: Create visually appealing and intuitive designs.\n\n" +
    "With 2+ years of experience in React Native and tools like Expo, Redux, and Firebase, I guarantee clean code, timely delivery, and professional communication. Whether it's a new project or improving an existing app, I'm committed to exceeding your expectations.\n\n" +
    "Ready to create something amazing? Send me a message today, and let's discuss your project!";

  const briefDescription = fullDescription.slice(0, 150) + "...";

  // Content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.description}>
                {showMore ? fullDescription : briefDescription}
              </Text>
              <TouchableOpacity
                style={styles.moreButton}
                onPress={() => {
                  console.log("Toggling Show More");
                  setShowMore(!showMore);
                }}
              >
                <Text style={styles.moreText}>
                  {showMore ? "Show Less" : "Show More"}
                </Text>
              </TouchableOpacity>

              <View style={styles.infoRow}>
                <Icon name="location-on" size={18} color="#00cc88" />
                <Text style={styles.infoLabel}>Pakistan</Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="person" size={18} color="#00cc88" />
                <Text style={styles.infoLabel}>
                  Member since <Text style={styles.infoBold}>Nov 2024</Text>
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="visibility" size={18} color="#00cc88" />
                <Text style={styles.infoLabel}>Last active: Online</Text>
              </View>

              <Text style={styles.sectionTitle}>Languages</Text>
              <Text style={styles.infoText}>English: Fluent</Text>

              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillButtons}>
                <TouchableOpacity style={styles.skillButton}>
                  <Text style={styles.skillButtonText}>React Native</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skillButton}>
                  <Text style={styles.skillButtonText}>React</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        );
      case "Gigs":
        return (
          <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
              <Text style={styles.contentTitle}>Gigs</Text>
              {gigs.map((gig) => (
                <TouchableOpacity
                  key={gig.id}
                  style={styles.gigBox}
                  onPress={() => navigation.navigate("SingleGigs")}
                >
                  <Image source={gig.image} style={styles.gigImage} />
                  <Text style={styles.gigTitle}>{gig.title}</Text>
                  <Text style={styles.gigPrice}>{gig.price}</Text>
                  <View style={styles.gigActions}>
                    <TouchableOpacity>
                      <Icon name="favorite-border" size={20} color="#00cc88" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        );
      case "Reviews":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Reviews</Text>
            <Text style={styles.contentText}>
              "Excellent work! Delivered the project on time with great
              attention to detail." - John D.
            </Text>
            <Text style={styles.contentText}>
              "Ghalib is a talented developer. Highly recommend for app
              development projects." - Sarah K.
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/ghalib.jpg")}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.userName}>Ghalib R</Text>
      <Text style={styles.userHandle}>@ghalibraza12</Text>

      <View style={styles.navigationContainer}>
        {["About", "Gigs", "Reviews"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.navTab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[styles.navText, activeTab === tab && styles.activeText]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderContent({ navigation })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    //flex: 1,
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#121212",
    borderRadius: 10,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  contentText: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 10,
  },
  moreButton: {
    alignSelf: "flex-start",
    marginVertical: 5,
  },
  moreText: {
    color: "#00cc88",
    fontWeight: "bold",
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  infoLabel: {
    color: "#ccc",
    marginLeft: 8,
  },
  infoBold: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 10,
  },
  skillButtons: {
    flexDirection: "row",
    gap: 10,
  },
  skillButton: {
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  skillButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 8,
  },
  userHandle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },
  navTab: {
    paddingVertical: 6,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#00cc88",
  },
  navText: {
    color: "#888",
    fontSize: 16,
  },
  activeText: {
    color: "#00cc88",
    fontWeight: "bold",
  },
  gigBox: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  gigImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  gigTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  gigDescription: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 5,
  },
  gigPrice: {
    fontSize: 14,
    color: "#00cc88",
    fontWeight: "bold",
    marginTop: 5,
  },
  gigActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
});
