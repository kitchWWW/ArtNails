import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { suggestions } from './suggestionsData'; // Import suggestions array
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

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

var onboardingStuff = [["Welcome! Use the following cards to prompt you to think about your artistic practice differently.\n\nSuggestions are pulled from musicians, painters, actors, listeners, and more.", "First Card", "Brian Ellis"]]

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

function filterSuggestions(suggestions, authors) {
  // Filter suggestions based on the selected authors
  const filteredSuggestions = suggestions.filter(([_, author]) => {
    // console.log("Hello? testing!")
    // console.log(_)
    // console.log(author)
    // console.log(authors[author]!=false)
    // If author is selected in the authors map, include the suggestion
    return authors[author]!=false;
  });

  return filteredSuggestions;
}

export default function Card({navigation}) {
  const [timesPressed, setTimesPressed] = useState(0);
  const [haveWaited, setHaveWaited] = useState(true);
  const [currentTimeout, setCurrentTimeout] = useState(0);
  const [isOnboarding, setIsOnboarding] = useState(0);

  const [textLog, setTextLog] = useState("");
  const [nameThing, setNameThing] = useState("");
  const [buttonPrompt, setButtonPrompt] = useState("");

  const isFocused = useIsFocused();
  const [waitTime, setWaitTime] = useState("20"); // Default wait time
  const [authors, setAuthors] = useState({}); // State to store selected authors

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



// Load settings on component mount
  useEffect(() => {
    console.log("effecting!!!!")
    loadSettings();
    setHaveWaited(true)
  }, [isFocused]);

  useEffect(() => {
    var res = filterSuggestions(suggestions,authors)    
    if(res.length == 0){
      setTextLog("Uh-oh! No cards were found. Go add more authors in your settings page!")
      setButtonPrompt("no new cards")
      setNameThing("admin team")
      return
    }
    console.log("effecting HERE!!!!")
    if(isOnboarding == 0){
      setTextLog(onboardingStuff[isOnboarding][0])
      setButtonPrompt(onboardingStuff[isOnboarding][1])
      setNameThing(onboardingStuff[isOnboarding][2])
    }else{
      setTextLog(res[timesPressed%res.length][0])
      setButtonPrompt("Get New Card")
      setNameThing(res[timesPressed%res.length][1])
    }
  }, [isOnboarding,timesPressed, authors]);

  useEffect(() => {
    if(!haveWaited){
      setButtonPrompt(waitMessages[timesPressed%waitMessages.length])
    }else{
      if(isOnboarding == 0){
        setButtonPrompt(onboardingStuff[isOnboarding][1])
      }else{
        setButtonPrompt("Get New Card")
      }
    }
  }, [haveWaited]);

  return (
    <View style={styles.container}>
    <Pressable
    onPress={() => navigation.navigate('Settings')}
    >
    <Text style={{
      marginLeft:50,
      marginTop:60,
    }}>
    <FontAwesomeIcon
    icon={faGear}
    size={30}/>
    </Text>
    </Pressable>
    <View style={styles.logBox}>
    <Text style={styles.TextStyle1}testID="pressable_press_console">{textLog}</Text>
    <Text style={styles.TextStyle2}>
    {"\n - "}{nameThing}</Text>
    </View>
    <View>
    <Pressable
    disabled={!haveWaited}
    onPress={() => {
      setIsOnboarding(onboard => onboard + 1);
      setTimesPressed(current => current + 1);
      setCurrentTimeout(setTimeout(() => {
        setHaveWaited(true)
      }, waitTime * 1000))
      setHaveWaited(false)
    }}
    style={({pressed}) => [
    {
      justifyContent: 'center',
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 50,
      height:50,
      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'rgb(240, 240, 240)',
    },
    styles.wrapperCustom,
    ]}>
    <Text style={
      {
        alignSelf: 'center',
        fontSize: 20,
        color: haveWaited ? 'rgb(0,0,0)' : 'rgb(150,150,150)',
      }}>{buttonPrompt}</Text>
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
    borderWidth: StyleSheet.hairlineWidth*2,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});
