import React from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";

export const popularServices = [
  { id: 1, title: "Logo Design", price: "$10", image: "https://picsum.photos/200/300?random=1" },
  { id: 2, title: "Web Development", price: "$50", image: "https://picsum.photos/200/300?random=2" },
  { id: 3, title: "Content Writing", price: "$25", image: "https://picsum.photos/200/300?random=3" },
  { id: 4, title: "SEO Optimization", price: "$30", image: "https://picsum.photos/200/300?random=4" },
  { id: 5, title: "Social Media Management", price: "$20", image: "https://picsum.photos/200/300?random=5" },
  { id: 6, title: "Voice Over Services", price: "$15", image: "https://picsum.photos/200/300?random=6" },
  { id: 7, title: "Video Editing", price: "$40", image: "https://picsum.photos/200/300?random=7" },
  { id: 8, title: "Translation Services", price: "$12", image: "https://picsum.photos/200/300?random=8" },
  { id: 9, title: "E-commerce Development", price: "$100", image: "https://picsum.photos/200/300?random=9" },
  { id: 10, title: "Mobile App Development", price: "$150", image: "https://picsum.photos/200/300?random=10" },
];

export default function Services() {
  // Function to render each service item
  const renderService = ({ item }) => (
    <ScrollView>
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
    </ScrollView>
  );

  return (
    
    <ScrollView style={styles.container}>
    
      <Text style={styles.header}>Popular Services</Text>
      <FlatList
        data={popularServices}
        renderItem={renderService}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20, // Adds space at the bottom of the list
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
    color: "green",
  },
});
