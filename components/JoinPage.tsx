import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Link, useNavigation } from "@react-navigation/native";
import { ExternalLink } from "@/components/ExternalLink";

const JoinPage: React.FC = () => {
  const navigation = useNavigation();

  const handleGoogleSignup = () => {
    // Logic for Google Sign-Up (you can integrate with Firebase or another service)
    console.log("Google Sign-Up");
  };

  const handleFacebookSignup = () => {
    // Logic for Facebook Sign-Up (you can integrate with Facebook SDK or another service)
    console.log("Facebook Sign-Up");
  };

  const handleSignUpWithEmail = () => {
    // Logic for sign-up with email
    console.log("Sign-Up with Email");
  };

  return (
    <View style={styles.container}>
      {/* Fiverr Logo */}
      <Image
        source={require("@/assets/images/Fiverr-Logo.png")}
        style={styles.logo}
      />

      {/* Heading Text */}
      <Text style={styles.title}>Join Fiverr</Text>

      {/* Subheading Text */}
      <Text style={styles.subTitle}>Create an account</Text>

      {/* Google Sign-Up Button */}
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignup}>
        <Ionicons name="logo-google" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Facebook Sign-Up Button */}
      <TouchableOpacity
        style={[styles.socialButton, styles.facebookButton]}
        onPress={handleFacebookSignup}
      >
        <FontAwesome name="facebook" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Sign-Up with Email Button */}
      <TouchableOpacity
        style={[styles.socialButton, styles.emailButton]}
        onPress={handleSignUpWithEmail}
      >
        <Ionicons name="mail" size={20} color="white" />
        <Text style={styles.socialButtonText}>Sign up with Email</Text>
      </TouchableOpacity>

      {/* Terms of Service Text */}
      <Text style={styles.termsText}>
        By joining, you agree to Fiverr's{" "}
        <TouchableOpacity style={styles.termsButton}>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Text type="Link" style={styles.termsButtonText}>Terms of Service</Text>
          </ExternalLink>
        </TouchableOpacity>
      </Text>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.bottomButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.bottomButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "black" },
  logo: { width: 100, height: 70, resizeMode: "contain", alignSelf: "flex-start" },
  title: { fontSize: 24, textAlign: "center", color: "white", marginTop: 80 },
  subTitle: { fontSize: 16, textAlign: "center", color: "grey", marginVertical: 10 },
  socialButton: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  socialButtonText: { color: "white", marginLeft: 10, fontSize: 16 },
  facebookButton: {
    //backgroundColor: "blue",
    //borderColor: "blue",
  },
  emailButton: {
    backgroundColor: "black",
    borderColor: "grey",
  },
  termsText: {
    color: "white",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
  },
  termsButton: {
    fontSize:15,
    //borderBottomWidth: 1,
    borderColor: "green",
  },
  termsButtonText: {
    fontSize:15,
    color: "green",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  bottomButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 8,
    alignItems: "center",
  },
  bottomButtonText: {
    color: "green",
    fontSize: 16,
  },
});

export default JoinPage;
