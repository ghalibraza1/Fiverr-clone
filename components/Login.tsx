import React from "react";
import {
  StyleSheet,
  View,
  Text,
  useColorScheme,
  Image,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginPage   = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Video
        source={require("@/assets/images/6799742-hd_720_1280_30fps.mp4")}
        style={StyleSheet.absoluteFillObject}
        shouldPlay
        isLooping
      />
      <View style={styles.overlay}>
        <Image
          style={styles.image}
          source={require("@/assets/images/FIVERLOGO.png")}
        />
        <Text style={styles.text}>
          FREELANCE SERVICES{"\n"}
          <Text style={styles.text1}>ON DEMAND</Text>
        </Text>
      </View>

      {/* Two-layer background for boxContainer */}
      <View style={styles.boxContainer}>
        <View style={styles.transparentHalf} />
        <View style={styles.greyHalf} />
        <View style={styles.contentContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate("JoinPage")}
          >
            <View style={styles.box}>
              <MaterialIcons name="search" size={32} color="#fff" />
              <Text style={styles.boxText}>Find a Service</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate("JoinPage")}
          >
            <View style={styles.box}>
              <FontAwesome5 name="handshake" size={32} color="#fff" />
              <Text style={styles.boxText}>Sell a Service</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style ={styles.actionButton}
        onPress={() => navigation.navigate("JoinPage")}
        >
        
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style ={styles.actionButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  text1: { fontSize: 30, fontWeight: "bold", color: "#fff" },
  image: { width: 150, height: 150, resizeMode: "contain" },
  boxContainer: {
    margin: 20,
    height: 150,
    position: "relative",
  },
  transparentHalf: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "transparent",
  },
  greyHalf: {
    position: "absolute",
    top: "50%", // Start from the middle of the boxContainer
    left: 0,
    right: 0,
    bottom: 80, // Stops before the buttonContainer
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  boxText: { color: "white", fontSize: 16, textAlign: "center" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    position: "relative",
    zIndex: 1, // Ensures the buttons remain on top
    backgroundColor: "transparent", // Ensures no overlap
  },
  actionButton: {
    color: "green",
  },
  buttonText: {
    color: "green",
    fontSize: 16,
  },
});

export default LoginPage;
