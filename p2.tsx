// import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { Ionicons } from '@expo/vector-icons'

// export default function Profile() {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Profile Header */}
//       <View style={styles.header}>
//         <Image 
//           source={{ uri: 'https://placekitten.com/200/200' }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.name}>John Doe</Text>
//         <Text style={styles.title}>Digital Marketing Expert</Text>
        
//         <View style={styles.statsContainer}>
//           <View style={styles.statItem}>
//             <Text style={styles.statNumber}>4.9</Text>
//             <Text style={styles.statLabel}>Rating</Text>
//           </View>
//           <View style={styles.statItem}>
//             <Text style={styles.statNumber}>127</Text>
//             <Text style={styles.statLabel}>Reviews</Text>
//           </View>
//           <View style={styles.statItem}>
//             <Text style={styles.statNumber}>89%</Text>
//             <Text style={styles.statLabel}>Response</Text>
//           </View>
//         </View>
//       </View>

//       {/* Description Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Description</Text>
//         <Text style={styles.description}>
//           Professional digital marketer with 5+ years of experience. Specialized in social media marketing,
//           SEO optimization, and content strategy.
//         </Text>
//       </View>

//       {/* Skills Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Skills</Text>
//         <View style={styles.skillsContainer}>
//           {['Digital Marketing', 'SEO', 'Social Media', 'Content Writing', 'Analytics'].map((skill) => (
//             <View key={skill} style={styles.skillBadge}>
//               <Text style={styles.skillText}>{skill}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Recent Work */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Recent Work</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.portfolioScroll}>
//           {[1, 2, 3].map((item) => (
//             <Image 
//               key={item}
//               source={{ uri: `https://picsum.photos/300/200?random=${item}` }}
//               style={styles.portfolioImage}
//             />
//           ))}
//         </ScrollView>
//       </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   title: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#666',
//   },
//   section: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   description: {
//     fontSize: 14,
//     color: '#444',
//     lineHeight: 22,
//   },
//   skillsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 10,
//   },
//   skillBadge: {
//     backgroundColor: '#f0f0f0',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//   },
//   skillText: {
//     fontSize: 14,
//     color: '#444',
//   },
//   portfolioScroll: {
//     flexDirection: 'row',
//   },
//   portfolioImage: {
//     width: 200,
//     height: 150,
//     borderRadius: 10,
//     marginRight: 15,
//   },
// })