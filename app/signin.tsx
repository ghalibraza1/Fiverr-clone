import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  useColorScheme
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Signin: React.FC = () => {
  const isDarkMode = useColorScheme() === "dark";
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top-left */}
      <Image
        source={require("@/assets/images/Fiverr-Logo.png")}
        style={styles.logo}
      />

      {/* Heading Text */}
      <Text style={styles.title}>Welcome to Fiverr</Text>
      <Text style={styles.subTitle}>Please enter the email and password</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="grey"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.showButton}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={20}
            color="grey"
          />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}
      onPress={() => navigation.navigate("(tabs)")}>     
      <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Social Networks Text */}
      <Text style={styles.socialText}>or via social networks</Text>

      {/* Google Sign-In Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={20} color="white" />
        <Text style={styles.socialButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Facebook Sign-In Button */}
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <FontAwesome name="facebook" size={20} color="white" />
        <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
      </TouchableOpacity>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
      <TouchableOpacity
        onPress={() => navigation.navigate("JoinPage")} // Navigate to JoinPage
      >
        
          <Text style={styles.bottomButtonText}>Join</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomButtonText}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "black" },
  logo: { width: 100, height: 70, resizeMode: "contain", position: "absolute", top: 20, left: 20 },
  title: { fontSize: 24, textAlign: "center", color: "white", marginTop: 80 },
  subTitle: { fontSize: 16, textAlign: "center", color: "grey", marginVertical: 10 },
  input: {
    backgroundColor: "black",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    color: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    color: "white",
  },
  showButton: {
    padding: 10,
  },
  continueButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  socialText: { color: "white", textAlign: "center", marginVertical: 10 },
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
  facebookButton: { backgroundColor: "black" },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  bottomButtonText: { color: "green", fontSize: 16 },
});

export default Signin;
