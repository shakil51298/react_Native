import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import User from './Components/User/User';

export default function App() {
  const [name, setName] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello React Native app!!</Text>
        <StatusBar style="auto" />
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 40 }}>
          {name}
        </Text>
        <Text>
          My Name Is Shakil Khan
        </Text>
        <Text>Hi I am scroll View</Text>
        <TextInput
          onChangeText={text => setName(text)}
          style={{ height: 40, borderColor: 'red', textAlign: 'center', width: 240, borderBottomWidth: .5 }}
          placeholder="please type your name here">
        </TextInput>
      </View>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator color='red' />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
