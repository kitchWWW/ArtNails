import { FaGear } from "react-icons/fa6";
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { suggestions } from './suggestionsData'; // Import suggestions array

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var waitMessages = [
  "Let card sink in...",
  "Let the idea percolate...",
  "think about it...",
  "reread card...",
  "consider the card again...",
  "how else might it apply..."
  ]
shuffle(waitMessages)
shuffle(suggestions)

export default function Card({navigation}) {
  const [timesPressed, setTimesPressed] = useState(0);
  const [haveWaited, setHaveWaited] = useState(true);
  const [isOnboarding, setIsOnboarding] = useState(0);

  var onboardingStuff = [["Welcome! Use the following cards to prompt you to think about your artistic practice differently.\n\nSuggestions are pulled from musicians, painters, actors, listeners, and more.", "First Card", "Brian Ellis"]]

  let textLog = '';
  let nameThing = "";
  let buttonPrompt = '';
  if(isOnboarding == 0){
    textLog = onboardingStuff[isOnboarding][0]
    buttonPrompt = onboardingStuff[isOnboarding][1]
    nameThing = onboardingStuff[isOnboarding][2]
  }else{
    textLog = suggestions[timesPressed%suggestions.length][0]
    buttonPrompt = "Get New Card"
    nameThing = suggestions[timesPressed%suggestions.length][1]
  }
  if(!haveWaited){
    buttonPrompt = waitMessages[timesPressed%waitMessages.length]
  }
  nameThing = "\n - "+nameThing
  
  return (
    <View style={styles.container}>
    <Pressable
      onPress={() => navigation.navigate('Settings')}
    >
      <Text style={{
        marginLeft:50,
        marginTop:20,
      }}><FaGear /></Text>
      </Pressable>
    <View style={styles.logBox}>
    <Text style={styles.TextStyle1}testID="pressable_press_console">{textLog}</Text>
    <Text style={styles.TextStyle2}>{nameThing}</Text>
    </View>
    <View style={{flexDirection:"row-centered"}}>

    <Pressable
    disabled={!haveWaited}
    onPress={() => {
      setIsOnboarding(onboard => onboard + 1);
      setTimesPressed(current => current + 1);
      setTimeout(() => {
        setHaveWaited(true)
      }, 25000)
      setHaveWaited(false)
    }}
    style={({pressed}) => [
    {
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 20,
      height:50,
      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'rgb(240, 240, 240)',
    },
    styles.wrapperCustom,
    ]}>
    {({pressed}) => (
      <View style={styles.buttonContainer}>
      <Text style={
        {
          alignSelf: 'center',
          fontSize: 20,
          color: haveWaited ? 'black' : 'grey',
        }}>{buttonPrompt}</Text>
        </View>
        )}
    </Pressable>
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgb(255,250,240)'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  TextStyle1: {
    // fontStyle: 'italic',
    fontSize: 20,

  },
  TextStyle2: {
    fontStyle: 'italic',
    fontSize: 18,
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 10,
    padding: 6,
    borderColor: 'green',
  },
  logBox: {
    borderRadius: 10,
    padding: 20,
    margin: 50,
    minheight: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});
