import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For right arrow icons

const AccountButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.accountButton} onPress={onPress}>
    <Text style={styles.accountText}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color="#bbb" />
  </TouchableOpacity>
);

export default function AccountPage() {
  // Handle logout action
  const handleLogout = () => {
    Alert.alert("Logged Out", "You have been logged out.");
  };

  // Handle account deactivation action
  const handleDeactivation = () => {
    Alert.alert("Account Deactivated", "Your account has been deactivated.");
  };

  return (
    <View style={styles.container}>
      {/* Account Info Heading */}
      <Text style={styles.header}>Account Info</Text>

      {/* Full Name */}
      <View style={styles.accountBox}>
        <Text style={styles.accountLabel}>Full Name</Text>
        <Text style={styles.accountDetail}>Ghalib Raza</Text>
      </View>

      {/* My Email (privacy) */}
      <View style={styles.accountBox}>
        <Text style={styles.accountLabel}>My Email</Text>
        <Text style={styles.accountDetail}>Privacy Protected</Text>
      </View>

      {/* Personal Balance Button */}
      <AccountButton title="Personal Balance" onPress={() => console.log("Personal Balance clicked")} />

      {/* Account Management Heading */}
      <Text style={styles.header}>Account Management</Text>

      {/* Deactivation Button */}
      <AccountButton title="Deactivation" onPress={handleDeactivation} />

      {/* Privacy Button */}
      <AccountButton title="Privacy" onPress={() => console.log("Privacy clicked")} />

      {/* Logout Button */}
      <AccountButton title="Logout" onPress={handleLogout} />
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
  accountBox: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
  },
  accountLabel: {
    fontSize: 16,
    color: "#bbb",
  },
  accountDetail: {
    fontSize: 18,
    color: "#fff",
    marginTop: 5,
  },
  accountButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  accountText: {
    fontSize: 16,
    color: "#fff",
  },
});
