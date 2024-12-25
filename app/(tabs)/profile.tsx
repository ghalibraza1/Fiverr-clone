import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons"; // Import Icons
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ShareGigPage from "@/components/ShareGigPage";
import ProfilePage from "@/components/Profilepage";

export default function Profile() {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation=useNavigation()
  // Dynamic styles for theme switching
  const dynamicStyles = {
    container: {
      flex: 1,
      backgroundColor: isEnabled ? "#121212" : "#fff",
    },
    text: {
      color: isEnabled ? "#fff" : "#000",
    },
    switchBox: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: isEnabled ? "#1e1e1e" : "#f8f8f8",
      padding: 15,
      margin: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: isEnabled ? "#444" : "#ddd",
    },
    buttonBox: {
      backgroundColor: isEnabled ? "#1e1e1e" : "#f8f8f8",
      padding: 15,
      marginVertical: 5,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center", // Align icon and text vertically
    },
    sectionHeading: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 10,
      color: isEnabled ? "#fff" : "#000",
    },
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={dynamicStyles.container}>
        {/* Header with Bell Icon */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.bellButton}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/ghalib.jpg")} // Replace with your profile image URL
            style={styles.profileImage}
          />
          <Text style={[styles.name, dynamicStyles.text]}>Ghalib Raza</Text>
          <Text style={[styles.personalBalance, dynamicStyles.text]}>
            Personal Balance: $0
          </Text>
        </View>

        {/* Switch Mode Section */}
        <View style={dynamicStyles.switchBox}>
          <Text style={[styles.switchLabel, dynamicStyles.text]}>
            Switch Mode
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* Selling Section */}
        
        <ScrollView>
          <Text style={[styles.sellingHeading, dynamicStyles.text]}>Selling</Text>

          {/* Buttons with Icons */}
          <TouchableOpacity
            style={dynamicStyles.buttonBox}
            onPress={() => navigation.navigate("EarningDetails")}
          >
            <MaterialIcons
              name="attach-money"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text   style={[styles.buttonText, dynamicStyles.text]}>Earning</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <MaterialIcons
              name="edit"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              Custom Offer
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={dynamicStyles.buttonBox} 
          onPress={() => navigation.navigate("ShareGigPage")}>
            <MaterialIcons
              name="volume-up"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              Share Gigs
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <Feather
              name="list"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              Manage Gigs
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={dynamicStyles.buttonBox} 
           onPress={() => navigation.navigate("ProfilePage") }                                               >
            <Ionicons
              name="person-outline"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              My Profile
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <MaterialIcons
              name="access-time"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              Availability
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <Ionicons
              name="mail-outline"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              Invite Friends
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        

          {/* Settings Section */}
          <Text style={dynamicStyles.sectionHeading}>Settings</Text>
          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <Ionicons
              name="settings-outline"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              Preference
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <Ionicons
              name="person-circle-outline"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>Account</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>

          {/* Resources Section */}
          <Text style={dynamicStyles.sectionHeading}>Resources</Text>
          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>Support</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonBox}>
            <Feather
              name="users"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, dynamicStyles.text]}>
              Community & Legal
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={isEnabled ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 15,
  },
  bellButton: {
    padding: 10,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  sellingHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  personalBalance: {
    fontSize: 16,
    color: "#666",
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  buttonText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});
