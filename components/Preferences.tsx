import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For right arrow icons

export default function Preferences() {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnlineStatus = () => setIsOnline((prev) => !prev);

  const renderPreferenceButton = (title, onPress) => (
    <TouchableOpacity style={styles.preferenceButton} onPress={onPress}>
      <Text style={styles.preferenceText}>{title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#bbb" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Preferences</Text>

      {/* Notification Button */}
      {renderPreferenceButton("Notifications", () => {
        // Handle Notifications
        console.log("Notifications clicked");
      })}

      {/* Security Button */}
      {renderPreferenceButton("Security", () => {
        // Handle Security
        console.log("Security clicked");
      })}

      {/* Language Button */}
      {renderPreferenceButton("Language", () => {
        // Handle Language
        console.log("Language clicked");
      })}

      {/* Appearances Button */}
      {renderPreferenceButton("Appearances", () => {
        // Handle Appearances
        console.log("Appearances clicked");
      })}

      {/* Currency Button */}
      {renderPreferenceButton("Currency", () => {
        // Handle Currency
        console.log("Currency clicked");
      })}

      {/* Online Status */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Online Status</Text>
        <Switch
          value={isOnline}
          onValueChange={toggleOnlineStatus}
          trackColor={{ false: "#767577", true: "#4caf50" }}
          thumbColor={isOnline ? "#fff" : "#f4f3f4"}
        />
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  preferenceButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  preferenceText: {
    fontSize: 16,
    color: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  switchLabel: {
    fontSize: 16,
    color: "#fff",
  },
});
