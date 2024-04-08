// SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { suggestions } from './suggestionsData'; // Import suggestions array
import { View, Text, TextInput, Button, Switch, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({ navigation }) {
  const [waitTime, setWaitTime] = useState(20); // Default wait time
  const [authors, setAuthors] = useState({}); // State to store selected authors

  // Function to handle input change for wait time
  const handleWaitTimeChange = (value) => {
    setWaitTime(parseInt(value)); // Convert input value to integer
  };

  // Function to handle checkbox change for authors
  const handleAuthorChange = (author, isSelected) => {
    setAuthors({ ...authors, [author]: isSelected }); // Toggle author selection
  };



  // Function to load settings from AsyncStorage
  const loadSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('settings');
      if (savedSettings !== null) {
        const { waitTime, authors } = JSON.parse(savedSettings);
        setWaitTime(waitTime);
        setAuthors(authors);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  // Function to save settings to AsyncStorage
  const saveSettings = async () => {
    try {
      const settings = JSON.stringify({ waitTime, authors });
      await AsyncStorage.setItem('settings', settings);
      console.log('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };


  // Load settings on component mount
  useEffect(() => {
    console.log("useEffect on load !!!")
    loadSettings();
  }, []);


  useEffect(() => {
    console.log("useEffect on change for authors,waitTime !!!")
    saveSettings();
  }, [authors,waitTime]);


  const uniqueAuthors = Array.from(new Set(suggestions.map(([_, author], index) => (author)))).sort();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Suggested Contemplation Time (seconds)</Text>
        <TextInput
        style={styles.input}
        inputMode="numeric"
        maxLength={4}
        value={(waitTime ? waitTime.toString() : 0)}
        onChangeText={ (text)=>{
          console.log("here????")
          console.log(text)
          handleWaitTimeChange(text.replace(/[^0-9]/g, ''))

      }}
        />

        <Text style={styles.heading}>Select Authors</Text>
        {uniqueAuthors.map((author, index) => (
          <View key={index} style={styles.authorContainer}>
            <Switch
              value={authors[author] != false}
              onValueChange={(isSelected) => handleAuthorChange(author, isSelected)}
            />
            <Text style={{
              marginRight:10,
              marginLeft:10,
              marginTop:2,
            }}>{author}</Text>
          </View>
          ))}
      </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    backgroundColor: 'rgb(255,250,240)'
  },
  scrollView: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    padding: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  authorContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
