import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const GigComponent = ({ title, image, onShare }) => {
  return (
    <View>
    <View style={styles.gigCard}>
    <Image source={image} style={styles.gigImage} />
    <Text style={styles.gigTitle}>{title}</Text>
    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
      <Icon name="share-outline" size={20} color="#fff" />
      <Text style={styles.shareButtonText}>Share</Text>
    </TouchableOpacity>  
  </View>
  
  </View>
  
   
  
);
};


const styles = StyleSheet.create({
  gigCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 1,
    marginRight: 10,
    width: 200,
  },
  gigImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  gigTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#333", 
  },
  shareButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5,
  },
  traffic: {
    color:"white",
  },
  trafficText: {
    color: "#fff",
   fontSize:20,
  },
});

export default GigComponent;
