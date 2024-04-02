// SettingsScreen.js
import React, { useState } from 'react';
import { suggestions } from './suggestionsData'; // Import suggestions array
import { View, Text, TextInput, Button, Switch, StyleSheet,SafeAreaView, ScrollView } from 'react-native';

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

  const uniqueAuthors = Array.from(new Set(suggestions.map(([_, author], index) => (author)))).sort();
  console.log(uniqueAuthors);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Suggested Contemplation Time (seconds)</Text>
        <TextInput
        style={styles.input}
        inputMode="numeric"
        maxLength={4}
        value={waitTime.toString()}
        onChangeText={handleWaitTimeChange}
        />

        <Text style={styles.heading}>Select Authors</Text>
        {uniqueAuthors.map((author, index) => (
          <View key={index} style={styles.authorContainer}>
            <Switch
              value={authors[author] || false}
              onValueChange={(isSelected) => handleAuthorChange(author, isSelected)}
            />
            <Text style={{
              marginRight:10,
              marginLeft:10,
              marginTop:2,
            }}>{author}</Text>
          </View>
          ))}

        <View style={styles.buttonContainer}>
            <Button title="Save" onPress={() => {/* Save settings */}} />
        </View>
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
