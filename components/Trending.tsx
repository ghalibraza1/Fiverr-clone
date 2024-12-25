import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  useColorScheme,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TrendingComponent = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [headerStyle, setHeaderStyle] = useState(styles.largeHeader);

  const categories = ["All", "Trending", "For You", "Cartoons", "Illustration"];
  const artworks = [
    { id: 1, title: "Modern Architecture", category: "Architecture" },
    { id: 2, title: "Fashion Sketch", category: "Fashion Design" },
    { id: 3, title: "Digital Portrait", category: "Illustration" },
    { id: 4, title: "3D Animation", category: "Animation" },
    { id: 5, title: "Logo Design", category: "Branding" },
  ];

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.y;
    if (offset > 50) {
      setHeaderStyle(styles.smallHeader);
    } else {
      setHeaderStyle(styles.largeHeader);
    }
  };

  const handleGigPress = (item) => {
    Alert.alert("Gig Selected", `You selected: ${item.title}`);
  };

  const handleGigLongPress = (item) => {
    Alert.alert(
      "Gig Options",
      `What would you like to do with ${item.title}?`,
      [
        { text: "Share", onPress: () => console.log("Share") },
        { text: "See Gig", onPress: () => console.log("See Gig") },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} onScroll={handleScroll} scrollEventThrottle={16}>
      {/* Header Section */}
      <View>
        <Text style={headerStyle}>Spark your{"\n"}next idea</Text>
        <Text style={styles.subText}>
          Explore beautiful work, made on Fiverr, picked for you
        </Text>
      </View>

      {/* Horizontal Scrollable Categories */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryBox}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
        style={styles.categoryList}
      />

      {/* Recently Made Section */}
      <Text style={styles.sectionTitle}>Recently Made</Text>

      {/* Scrollable View for Artworks */}
      <FlatList
        data={artworks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.artBox}
            onPress={() => handleGigPress(item)}
            onLongPress={() => handleGigLongPress(item)}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/100" }} // Replace with dynamic images
              style={styles.artImage}
            />
            <View style={styles.artFooter}>
              <Text style={styles.artTitle}>{item.title}</Text>
              <TouchableOpacity>
                <FontAwesome name="heart-o" size={20} color="grey" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.artList}
      />
    </ScrollView>
  );
};

export default TrendingComponent;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  largeHeader: {
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
  smallHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
  subText: {
    fontSize: 14,
    color: "grey",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  categoryList: { marginVertical: 10 },
  categoryBox: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  categoryText: { fontSize: 14, color: "#333" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
  artList: { paddingHorizontal: 10, paddingBottom: 20 },
  artBox: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    margin: 10,
    width: "45%",
    overflow: "hidden",
  },
  artImage: { width: "100%", height: 100, resizeMode: "cover" },
  artFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  artTitle: { fontSize: 14, fontWeight: "bold", flex: 1 },
});
