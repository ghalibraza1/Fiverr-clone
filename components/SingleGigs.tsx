import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProfilePage from "@/components/Profilepage";
import { useNavigation } from "@react-navigation/native";
 // Adjust import as needed


export default function SingleGigPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Tab1");
    const navigation=useNavigation()

  const gig = {
    title: "Develop a cross-platform app in React Native",
    description:
      "I will develop a cross-platform mobile app using React Native and Expo, with a modern UI/UX, API integration, and performance optimization.",
    image: require("@/assets/images/develop-a-cross-platform-app-using-react-native-expo.jpg"),
    profilePic: require("@/assets/images/ghalib.jpg"),
    name: "Ghalib Raza",
    fullDescription:
      "I am an experienced mobile app developer specializing in React Native and Expo.\n\n" +
      "I bring extensive experience in developing cross-platform applications that work seamlessly on both Android and iOS platforms. " +
      "With a strong background in desktop app development, web development, and smartphone app development, I have successfully completed numerous projects.\n\n" +
      "These range from chatbots and web-based business applications to diet planners and virtual assistants for diabetics.\n\n" +
      "I am dedicated to diving deep into project requirements to deliver efficient and effective solutions. " +
      "Passionate about turning ideas into reality, I help clients develop standout projects with precision and creativity.\n\n" +
      "Whether you're looking to build a new app from scratch or need expert assistance to enhance an existing project, I'm here to help.\n\n" +
      "Let's collaborate to bring your vision to life!",
  };

  const handleShare = () => {
    Alert.alert("Gig Shared", `You have shared: ${gig.title}`);
  };

  // Function to render content based on selected tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Tab1":
        return <Text style={styles.tabContent}>Content for $400 Layout</Text>;
      case "Tab2":
        return <Text style={styles.tabContent}>Content for $200 Layout</Text>;
      case "Tab3":
        return <Text style={styles.tabContent}>Content for $100 Layout</Text>;
      default:
        return <Text style={styles.tabContent}>Please select a tab</Text>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Gig Image */}
      <View style={styles.imageContainer}>
        <Image source={gig.image} style={styles.gigImage} />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleShare}>
            <Icon name="share-outline" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Added to Favorites!")}>
            <Icon name="heart-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={gig.profilePic} style={styles.profileImage} />
        <Text style={styles.profileName}>{gig.name}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="chevron-down-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal for Dropdown */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Top Center White Line to Close */}
            <View style={styles.closeLineContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={styles.closeLine}></View>
              </TouchableOpacity>
            </View>

            {/* Profile Picture and Name */}
            <View style={styles.profileInfoContainer}>
              <Image source={gig.profilePic} style={styles.modalProfilePic} />
              <Text style={styles.modalProfileName}>{gig.name}</Text>
            </View>

            {/* User Information Section */}
            <View style={styles.userInfoContainer}>
              <Text style={styles.userInfoHeading}>User Information</Text>

              {/* Description with See More Button */}
              <Text style={styles.userInfoDescription}>
                {gig.fullDescription.length > 100
                  ? `${gig.fullDescription.substring(0, 100)}...`
                  : gig.fullDescription}
              </Text>
              {gig.fullDescription.length > 100 && (
                <TouchableOpacity
                  onPress={() => Alert.alert("See More Details")}
                >
                  <Text style={styles.seeMoreButton}>See More</Text>
                </TouchableOpacity>
              )}

              <View style={styles.locationLanguageContainer}>
                <View style={styles.locationContainer}>
                  <Icon name="location-outline" size={18} color="#fff" />
                  <Text style={styles.locationText}>Pakistan</Text>
                </View>
                <View style={styles.languageContainer}>
                  <Icon name="language-outline" size={18} color="#fff" />
                  <Text style={styles.languageText}>English</Text>
                </View>
              </View>
            </View>

            {/* See Profile Button with Navigation */}
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfilePage")}
            >
              <Text style={styles.seeProfileButton}>See Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Gig Details */}
      <View style={styles.gigDetails}>
        <Text style={styles.gigTitle}>{gig.title}</Text>
        <Text style={styles.gigDescription}>{gig.description}</Text>
        {showFullDescription ? (
          <Text style={styles.gigFullDescription}>{gig.fullDescription}</Text>
        ) : null}
        <TouchableOpacity
          onPress={() => setShowFullDescription(!showFullDescription)}
        >
          <Text style={styles.seeMore}>
            {showFullDescription ? "See Less" : "See More"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Tab1" && styles.selectedTab]}
          onPress={() => setSelectedTab("Tab1")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Tab1" && styles.selectedTabText,
            ]}
          >
            $400
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === "Tab2" && styles.selectedTab]}
          onPress={() => setSelectedTab("Tab2")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Tab2" && styles.selectedTabText,
            ]}
          >
            $200
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === "Tab3" && styles.selectedTab]}
          onPress={() => setSelectedTab("Tab3")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Tab3" && styles.selectedTabText,
            ]}
          >
            $100
          </Text>
        </TouchableOpacity>
      </View>

      {/* Render content based on selected tab */}
      {renderTabContent()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#121212",
  },
  imageContainer: {
    position: "relative",
  },
  gigImage: {
    width: "100%",
    height: 200,
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    gap: 15,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
  },
  gigDetails: {
    padding: 15,
  },
  gigTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  gigDescription: {
    fontSize: 16,
    color: "#bbb",
  },
  gigFullDescription: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 10,
  },
  seeMore: {
    color: "#00b300", // Green color
    marginTop: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 30,
  },
  closeLineContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  closeLine: {
    width: 50,
    height: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  modalProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  modalProfileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfoContainer: {
    marginBottom: 20,
  },
  userInfoHeading: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userInfoDescription: {
    color: "#bbb",
    fontSize: 14,
  },
  locationLanguageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 14,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 14,
  },
  seeProfileButton: {
    color: "#00b300", // Green color
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  seeMoreButton: {
    color: "#00b300", // Green color
    textAlign: "center",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
  },
  
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 10,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#00b300", // Green underline for selected tab
  },
  tabText: {
    color: "#bbb", // Light color for inactive tabs
    fontSize: 16,
    fontWeight: "500",
  },
  selectedTabText: {
    color: "#00b300", // Green color for active tab text
    fontWeight: "bold",
  },
  tabContent: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
