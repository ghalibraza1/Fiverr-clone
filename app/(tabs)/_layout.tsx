import React from "react";
import { Tabs } from "expo-router";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Signin from "@/app/signin";
import { NavigationContainer } from "@react-navigation/native";
import JoinPage from "@/components/JoinPage";
import SearchScreen from "./search";
//import ProfileScreen from "./profile";
import ManageOrdersScreen from "./manageOrders";
import InboxScreen from "./inbox";
import HomePage from "@/components/Login";
import Trending from "@/components/Trending";
import Login from "@/components/Login";
import services from "@/components/services";
import MyLevel from "@/components/MyLevel";
import EarningDetails from "@/components/EarningDetails";
import ShareGigPage from "@/components/ShareGigPage";
import ProfilePage from "@/components/Profilepage";
import SingleGigs from "@/components/SingleGigs";
import ManageGigs from "@/components/ManageGigs";
import Preferences from "@/components/Preferences";
import AccountPage from "@/components/AccountPage";

// Create Stack Navigator
const Stack = createStackNavigator();

function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "index",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "search" : "search"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbubbles" : "chatbubbles"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="manageOrders"
        options={{
          title: "ManageOrders",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "file-tray" : "file-tray-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              // name={focused ? "speedometer" : "speedometer-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="TabLayout">
      <Stack.Screen
        name="TabLayout"
        component={TabLayout}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={Signin} // Import your ProfileScreen here
        options={{ title: "SIGN IN" }}
      />
      <Stack.Screen
        name="JoinPage"
        component={JoinPage} // Import your SettingsScreen here
        options={{ title: "join" }}
      />
      <Stack.Screen
        name="Trending"
        component={Trending} // Import your ProfileScreen here
        options={{ title: "Trending" }}
      />
      <Stack.Screen
        name="services"
        component={services} // Import your ProfileScreen here
        options={{ title: "Services" }}
      />
      <Stack.Screen
        name="MyLevel"
        component={MyLevel} // Import your ProfileScreen here
        options={{ title: "MY LEVEL" }}
      />
      <Stack.Screen
        name="EarningDetails"
        component={EarningDetails} // Import your ProfileScreen here
        options={{ title: "Earning Details" }}
      />

      <Stack.Screen
        name="SingleGigs"
        component={SingleGigs} // Import your ProfileScreen here
        options={{ title: "SingleGigs" }}
      />
      <Stack.Screen
        name="ShareGigPage"
        component={ShareGigPage} // Import your ProfileScreen here
        options={{ title: "ShareGigPage" }}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage} // Import your ProfileScreen here
        options={{ title: "Profile Page" }}
      />
      <Stack.Screen
        name="ManageGigs"
        component={ManageGigs} // Import your ProfileScreen here
        options={{ title: "ManageGigs" }}
      />
      <Stack.Screen
        name="Preferences"
        component={Preferences} // Import your ProfileScreen here
        options={{ title: "Preferences" }}
      />
      <Stack.Screen
        name="AccountPage"
        component={AccountPage} // Import your ProfileScreen here
        options={{ title: "AccountPage" }}
      />
    </Stack.Navigator>
  );
}
