import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Inbox = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [messages, setMessages] = useState([
    { id: 1, title: 'New Order', message: 'You have a new order from John Doe' },
    { id: 2, title: 'Message from Client', message: 'Hello, I need some changes to my order' },
    // Add more messages here...
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Ionicons name="ios-chatbubbles" size={24} color="#4F8EF7" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>{item.message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Inbox;