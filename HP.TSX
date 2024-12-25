// // import React from "react";
// // import { StyleSheet, View, Text, useColorScheme, Image, TouchableOpacity } from "react-native";
// // import { Video } from "expo-av";
// // import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
// // import { Link, useNavigation } from "@react-navigation/native";
// // import { RootStackParamList } from "@/constants/Types";  // Import the defined types
// // import { StackNavigationProp } from "@react-navigation/stack";

// // const HomePage: React.FC = () => {
// //   const isDarkMode = useColorScheme() === "dark";
// //   const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();


// //   // Navigate to SignInPage
// //   const goToSignIn = () => {
// //     navigation.navigate("Signin"); // Navigate to the SignIn page
// //   };


// //   return (
// //     <View style={styles.container}>
// //       <Video
// //         source={require("@/assets/images/6799742-hd_720_1280_30fps.mp4")}
// //         style={StyleSheet.absoluteFillObject}
// //         shouldPlay
// //         isLooping
// //       />
// //       <View style={styles.overlay}>
// //         {/* Centered Logo */}
// //         <Image style={styles.image} source={require("@/assets/images/Fiverr_Logo_09.2020.svg.png")} />
// //         {/* Centered Text */}
// //         <Text style={styles.text}>
// //           FREELANCE SERVICES{"\n"}
// //           <Text style={styles.text1}>ON DEMAND</Text>
// //         </Text>
// //       </View>

// //       {/* Grey Boxes with Flex */}
      
// //       <View style={styles.boxContainer}>
// //       <TouchableOpacity>
// //         <View style={styles.box}>
// //           <MaterialIcons name="search" size={32} color="#fff" />
// //           <Text style={styles.boxText}>Find a Service{"\n"}
// //             <Text style={styles.boxtext1}>
// //                 Search for a service
// //             </Text>
            
// //           </Text>
          
// //         </View>
// //         </TouchableOpacity>
    
          
// //         <View style={styles.box}>
// //            <TouchableOpacity>
// //           <FontAwesome5 name="handshake" size={32} color="#fff" />
// //           <Text style={styles.boxText}>Selling a Service {"\n"}
// //             <Text style={styles.boxtext2}>
// //                 Sell your service
// //             </Text>
// //           </Text>
// //           </TouchableOpacity> 
// //         </View>
        
// //       </View>
      

// //       {/* Bottom Buttons */}
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={[styles.actionButton, styles.leftButton]}>
// //           <Text style={styles.buttonText}>Skip</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={[styles.actionButton, styles.rightButton]} onPress={}>
// //           <Text style={styles.buttonText}> Sign In</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     //backgroundColor: "#D3D3D3", // Grey background for the entire container
// //   },
// //   overlay: {
// //     flex: 1,
// //     justifyContent: "flex-end",
// //     alignItems: "center",
// //     //backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
// //   },
// //   text: {
// //     fontSize: 30,
// //     color: "#fff",
// //     fontWeight: "bold",
// //     textAlign: "center",
// //   },
// //   text1: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     color: "#fff",
// //   },
// //   image: {
// //     width: 150,
// //     height: 150,
// //     resizeMode: "contain",
// //   },
// //   boxContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-evenly",
// //     alignItems: "center",
// //     marginVertical: 20,
// //     paddingHorizontal: 20, // Add some horizontal padding to fit the boxes
// //     backgroundColor:"black",
// //     marginTop:40,
// //   },
// //   box: {
// //     flex: 1,
// //     backgroundColor: "grey",
// //     margin: 20,
// //     padding: 10,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     borderRadius: 10,
// //     marginTop:-30,
// //   },
// //   boxText: {
// //     color: "#fff",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     marginTop: 20,
// //     textAlign: "center",
// //   },
// //   boxtext1:{
// // fontSize:10,

// //   },
// //   boxtext2:{
// //     fontSize:10
// //   },

// //   buttonContainer: {
// //     color:"green",
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     position: "absolute",
// //     bottom: 20,
// //     width: "100%",
// //     paddingHorizontal: 20,
// //   },
// //   actionButton: {
// //     color:"green",
// //     //backgroundColor: "green",
// //     //padding: 15,
// //     //borderRadius: 10,
// //     //width: "40%", // Width is set to 40% to make the buttons fit
// //     alignItems: "center",
// //   },
// //   leftButton: {
// //     alignSelf: "flex-start",
// //   },
// //   rightButton: {
// //     alignSelf: "flex-end",
// //   },
// //   buttonText: {
// //     color: "green",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// // });

// // export default HomePage;
// import React from "react";
// import { StyleSheet, View, Text, useColorScheme, Image, TouchableOpacity } from "react-native";
// import { Video } from "expo-av";
// import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { RootStackParamList } from "@/constants/Types";  // Import the defined types

// const HomePage: React.FC = () => {
//   const isDarkMode = useColorScheme() === "dark";
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

//   // Navigate to SignInPage
//   const goToSignIn = () => {
//     navigation.navigate("Signin"); // Navigate to the SignIn page
//   };

//   return (
//     <View style={styles.container}>
//       <Video
//         source={require("@/assets/images/6799742-hd_720_1280_30fps.mp4")}
//         style={StyleSheet.absoluteFillObject}
//         shouldPlay
//         isLooping
//       />
//       <View style={styles.overlay}>
//         {/* Centered Logo */}
//         <Image style={styles.image} source={require("@/assets/images/Fiverr_Logo_09.2020.svg.png")} />
//         {/* Centered Text */}
//         <Text style={styles.text}>
//           FREELANCE SERVICES{"\n"}
//           <Text style={styles.text1}>ON DEMAND</Text>
//         </Text>
//       </View>

//       {/* Grey Boxes with Flex */}
//       <View style={styles.boxContainer}>
//         <TouchableOpacity>
//           <View style={styles.box}>
//             <MaterialIcons name="search" size={32} color="#fff" />
//             <Text style={styles.boxText}>Find a Service{"\n"}
//               <Text style={styles.boxtext1}>
//                 Search for a service
//               </Text>
//             </Text>
//           </View>
//         </TouchableOpacity>

//         <View style={styles.box}>
//           <TouchableOpacity>
//             <FontAwesome5 name="handshake" size={32} color="#fff" />
//             <Text style={styles.boxText}>Selling a Service {"\n"}
//               <Text style={styles.boxtext2}>
//                 Sell your service
//               </Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Bottom Buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={[styles.actionButton, styles.leftButton]}>
//           <Text style={styles.buttonText}>Skip</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={[styles.actionButton, styles.rightButton]} 
//           onPress={goToSignIn}  // Add the onPress handler here
//         >
//           <Text style={styles.buttonText}> Sign In</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 30,
//     color: "#fff",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   text1: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   image: {
//     width: 150,
//     height: 150,
//     resizeMode: "contain",
//   },
//   boxContainer: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     marginVertical: 20,
//     paddingHorizontal: 20,
//     backgroundColor: "black",
//     marginTop: 40,
//   },
//   box: {
//     flex: 1,
//     backgroundColor: "grey",
//     margin: 20,
//     padding: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//     marginTop: -30,
//   },
//   boxText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 20,
//     textAlign: "center",
//   },
//   boxtext1: {
//     fontSize: 10,
//   },
//   boxtext2: {
//     fontSize: 10,
//   },
//   buttonContainer: {
//     color: "green",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     position: "absolute",
//     bottom: 20,
//     width: "100%",
//     paddingHorizontal: 20,
//   },
//   actionButton: {
//     color: "green",
//     alignItems: "center",
//   },
//   leftButton: {
//     alignSelf: "flex-start",
//   },
//   rightButton: {
//     alignSelf: "flex-end",
//   },
//   buttonText: {
//     color: "green",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default HomePage;
