import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

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

var suggestions = [
  ["I myself do nothing. The Holy Spirit accomplishes all through me.","William Blake"],
  ["The primary imagination I hold to be the Living Power.","Samuel Taylor Coleridge"],
  ["I don’t believe; I know","Carl Jung"],
  ["Tiling","Brian Ellis"],
  ["Creativity is the natural order of life. Life is energy: pure creative energy.","Julia Cameron"],
  ["Try it and see what happens","Parents, rarely"],
  ["I am allowed to nurture my artist.","Julia Cameron"],
  ["Write three pages of longhand, stream-of-consciousness writing.\nDo not reread these pages or allow anyone else to read them.","Julia Cameron"],
  ["Make your own recovery the first priority in your life.","Robin Norwood"],
  ["Convert all blurts into positive affirmations.","Julia Cameron"],
  ["Take yourself on an artist date.","Julia Cameron"],
  ["Time Travel","Julia Cameron"],
  ["Imaginary Lives: If you had five other lives to lead, what would you do in each of them? ","Julia Cameron"],
  ["Find a sense of play","Joy Harjo"],
  ["Immerse yourself in a new environment","Joy Harjo"],
  ["Put the work away temporarily","Joy Harjo"],
  ["Refresh your spirit with inspiration from other artists","Joy Harjo"],
  ["Write about what is on your mind.","Joy Harjo"],
  ["Do nothing","Adam J. Kurtz"],
  ["Take a walk","Adam J. Kurtz"],
  ["Just do it","Nike"],
  ["Binge TV","Adam J. Kurtz"],
  ["Read a book","Adam J. Kurtz"],
  ["Scroll Instagram","Adam J. Kurtz"],
  ["Coffee with Friend","Adam J. Kurtz"],
  ["An Idea","Adam J. Kurtz"],
  ["More Coffee","Adam J. Kurtz"],
  ["sketch","Adam J. Kurtz"],
  ["make ten things","Adam J. Kurtz"],
  ["Go somewhere new","Christine Nishiyama"],
  ["Read a book","Christine Nishiyama"],
  ["Watch an inspiring movie","Christine Nishiyama"],
  ["Go for a walk or run outside","Christine Nishiyama"],
  ["Take notes. start taking notes during the day of things you think would be fun to create art with.","Christine Nishiyama"],
  ["Face your fears.","Christine Nishiyama"],
  ["Remind yourself of why you started and why you should come back.","Christine Nishiyama"],
  ["Remind yourself what you enjoy. Go back to drawing that thing for a while to get back in the groove and remind yourself that you enjoy drawing.","Christine Nishiyama"],
  ["Do a repetitive, non-creative task. Choose something that takes some time, and is repetitive so you can get a little lost in the action and daydream","Christine Nishiyama"],
  ["Make something bad. Do it fast, with no consideration for technique or “being good”. Just get it out into the world.","Christine Nishiyama"],
  ["Give yourself an assignment.","Christine Nishiyama"],
  ["Talk it out.","Christine Nishiyama"],
  ["You’re doing too much, Say no for a while.","Christine Nishiyama"],
  ["Get rid of tasks you don’t want to do anymore.","Christine Nishiyama"],
  ["Nothing is more dangerous than an idea when it is the only one we have","Roger von Oech"],
  ["Look for the second right answer","Roger von Oech"],
  ["The best way to get a good idea is to get a lot of ideas","Roger von Oech"],
  ["There are two kinds of people in this world: those who divide everything into two groups, and those who don't","Roger von Oech"],
  ["Make the strange familiar","Roger von Oech"],
  ["Make a metaphor for a concept you're developing. Compare your concept to something else and see what similarities you can find between the two ideas. Use one idea to highlight another.","Roger von Oech"],
  ["Look at something and think about what else it might be","Roger von Oech"],
  ["Re-position the problem in an ambisious way so as to not restrict your imagination.","Roger von Oech"],
  ["Let the world be your oracle. Allow random, unexpected information to stimulate your imagination.","Roger von Oech"],
  ["Listen to your dreams.","Roger von Oech"],
  ["Do it 10 ways incorrectly.","Brian Ellis"],
  ["Repeat it six times just like it is.","Brian Ellis"],
  ["If you hit every time, the target is too near or too big.","Roger von Oech"],
  ["If you make an error, use it as a stepping stone to an idea you might not otherwise have discovered.","Roger von Oech"],
  ["How many opportunities are you missing by not being more aggressive?","Roger von Oech"],
  ["What bad things can happen if we are successful?","Roger von Oech"],
  ["Use tools like clouded glasses and weighted gloves to experience processes as though you yourself have the abilities of different users.","IDEO"],
  ["Quickly prototype a concept from available materials and use it in order to learn.","IDEO"],
  ["Identify individuals who are extreemly familiar, or completely unfamiliar, with your work and ask them to evaluate their experience with it.","IDEO"],
  ["Aks 'Why?' questions in response to five consecutive answers.","IDEO"],
  ["Request input from friends and contacts in other cuntries and conduct a cross-cultural study on your work.","IDEO"],
  ["Fly on the wall: Observe and record behavior wihin its context, without interfering with people's activities.","IDEO"],
  ["Guided tours: accompany participants on a guided tour of the relevant space or activity or experience.","IDEO"],
  ["Historical Analysis: compare features of an industry, organization, group, market segment, or practice through various stages of development.","IDEO"],
  ["Act out an 'informative performance' by role-playing behaviors you have witnessed.","IDEO"],
  ["Long-range forcast: Write up prose scenarios that describe how social and/or technological trends might influence people's behavior, and their engagement with your art.","IDEO"],
  ["Narration: As they perform a process or execute a specific task, ask them to describe out loud what they are thinking.","IDEO"],
  ["Paper Prototyping: Rapidly sketch, layout, and evaluate your concept","IDEO"],
  ["Predict Next Year's Headlines","IDEO"],
  ["Make a really small version of it","Brian Ellis"],
  ["Make a really big (but hollow) version of it","Brian Ellis"],
  ["Abandon normal instruments","Brian Eno"],
  ["Accept advice","Brian Eno"],
  ["Accretion","Brian Eno"],
  ["A line has two sides","Brian Eno"],
  ["Allow an easement (an easement is the abandonment of a stricture)","Brian Eno"],
  ["Are there sections? Consider transitions","Brian Eno"],
  ["Ask people to work against their better judgement","Brian Eno"],
  ["Ask your body","Brian Eno"],
  ["Assemble some of the instruments in a group and treat the group","Brian Eno"],
  ["Balance the consistency principle with the inconsistency principle","Brian Eno"],
  ["Be dirty","Brian Eno"],
  ["Breathe more deeply","Brian Eno"],
  ["Bridges\n -build\n -burn","Brian Eno"],
  ["Cascades","Brian Eno"],
  ["Change instrument roles","Brian Eno"],
  ["Change nothing and continue with immaculate consistency","Brian Eno"],
  ["Children's voices\n -speaking\n -singing","Brian Eno"],
  ["Cluster analysis","Brian Eno"],
  ["Consider different fading systems","Brian Eno"],
  ["Consult other sources\n -promising\n -unpromising","Brian Eno"],
  ["Convert a melodic element into a rhythmic element","Brian Eno"],
  ["Courage!","Brian Eno"],
  ["Cut a vital connection","Brian Eno"],
  ["Decorate, decorate","Brian Eno"],
  ["Define an area as `safe' and use it as an anchor","Brian Eno"],
  ["Destroy\n -nothing\n -the most important thing","Brian Eno"],
  ["Discard an axiom","Brian Eno"],
  ["Disconnect from desire","Brian Eno"],
  ["Discover the recipes you are using and abandon them","Brian Eno"],
  ["Distorting time","Brian Eno"],
  ["Do nothing for as long as possible","Brian Eno"],
  ["Don't be afraid of things because they're easy to do","Brian Eno"],
  ["Don't be frightened of cliches","Brian Eno"],
  ["Don't be frightened to display your talents","Brian Eno"],
  ["Don't break the silence","Brian Eno"],
  ["Don't stress one thing more than another","Brian Eno"],
  ["Do something boring","Brian Eno"],
  ["Do the washing up","Brian Eno"],
  ["Do the words need changing?","Brian Eno"],
  ["Do we need holes?","Brian Eno"],
  ["Emphasize differences","Brian Eno"],
  ["Emphasize repetitions","Brian Eno"],
  ["Emphasize the flaws","Brian Eno"],
  ["Faced with a choice, do both (given by Dieter Rot)","Brian Eno"],
  ["Feedback recordings into an acoustic situation","Brian Eno"],
  ["Fill every beat with something","Brian Eno"],
  ["Get your neck massaged","Brian Eno"],
  ["Ghost echoes","Brian Eno"],
  ["Give the game away","Brian Eno"],
  ["Give way to your worst impulse","Brian Eno"],
  ["Go slowly all the way round the outside","Brian Eno"],
  ["Honor thy error as a hidden intention","Brian Eno"],
  ["How would you have done it?","Brian Eno"],
  ["Humanize something free of error","Brian Eno"],
  ["Imagine the music as a moving chain or caterpillar","Brian Eno"],
  ["Imagine the music as a set of disconnected events","Brian Eno"],
  ["Infinitesimal gradations","Brian Eno"],
  ["Intentions\n -credibility of\n -nobility of\n -humility of","Brian Eno"],
  ["Into the impossible","Brian Eno"],
  ["Is it finished?","Brian Eno"],
  ["Is there something missing?","Brian Eno"],
  ["Is the tuning appropriate?","Brian Eno"],
  ["Just carry on","Brian Eno"],
  ["Left channel, right channel, centre channel","Brian Eno"],
  ["Listen in total darkness, or in a very large room, very quietly","Brian Eno"],
  ["Listen to the quiet voice","Brian Eno"],
  ["Look at a very small object, look at its centre","Brian Eno"],
  ["Look at the order in which you do things","Brian Eno"],
  ["Look closely at the most embarrassing details and amplify them","Brian Eno"],
  ["Lowest common denominator check\n -single beat\n -single note\n -single","Brian Eno"],
  ["riff","Brian Eno"],
  ["Make a blank valuable by putting it in an exquisite frame","Brian Eno"],
  ["Make an exhaustive list of everything you might do and do the last","Brian Eno"],
  ["thing on the list","Brian Eno"],
  ["Make a sudden, destructive unpredictable action; incorporate","Brian Eno"],
  ["Mechanicalize something idiosyncratic","Brian Eno"],
  ["Mute and continue","Brian Eno"],
  ["Only one element of each kind","Brian Eno"],
  ["(Organic) machinery","Brian Eno"],
  ["Overtly resist change","Brian Eno"],
  ["Put in earplugs","Brian Eno"],
  ["Remember those quiet evenings","Brian Eno"],
  ["Remove ambiguities and convert to specifics","Brian Eno"],
  ["Remove specifics and convert to ambiguities","Brian Eno"],
  ["Repetition is a form of change","Brian Eno"],
  ["Reverse","Brian Eno"],
  ["Shortcircuit: (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)","Brian Eno"],
  ["Shut the door and listen from outside","Brian Eno"],
  ["Simple subtraction","Brian Eno"],
  ["Spectrum analysis","Brian Eno"],
  ["Take a break","Brian Eno"],
  ["Take away the elements in order of apparent non-importance","Brian Eno"],
  ["Tape your mouth (given by Ritva Saarikko)","Brian Eno"],
  ["The inconsistency principle","Brian Eno"],
  ["The tape is now the music","Brian Eno"],
  ["Think of the radio","Brian Eno"],
  ["Tidy up","Brian Eno"],
  ["Trust in the you of now","Brian Eno"],
  ["Turn it upside down","Brian Eno"],
  ["Twist the spine","Brian Eno"],
  ["Use an old idea","Brian Eno"],
  ["Use an unacceptable color","Brian Eno"],
  ["Use fewer notes","Brian Eno"],
  ["Use filters","Brian Eno"],
  ["Use 'unqualified' people","Brian Eno"],
  ["Water","Brian Eno"],
  ["What are you really thinking about just now? Incorporate","Brian Eno"],
  ["What is the reality of the situation?","Brian Eno"],
  ["What mistakes did you make last time?","Brian Eno"],
  ["What would your closest friend do?","Brian Eno"],
  ["What wouldn't you do?","Brian Eno"],
  ["Work at a different speed","Brian Eno"],
  ["You are an engineer","Brian Eno"],
  ["You can only make one dot at a time","Brian Eno"],
  ["You don't have to be ashamed of using your own ideas","Brian Eno"],
  ["Build a fire","La Monte Young"],
  ["Find two unrelated objects near you and think of a clever way they might be used together.","u/[deleted]"],
  ["How do the opinions of others affect you?","u/[deleted]"],
  ["How do you feel about asking for help?","u/[deleted]"],
  ["Invent your own planet.","u/[deleted]"],
  ["We don't see things as they are, we see them as we are","Anaïs Nin"],
  ["Take a task that you’ve been dreading and break it up into the smallest possible steps.","u/[deleted]"],
  ["The world would be a lot better if...","u/[deleted]"],
  ["What biases do you need to work on?","u/[deleted]"],
  ["What do you need to give yourself more credit for?","u/[deleted]"],
  ["When was the last time you had to hold your tongue? What would you have said if you didn't have to?","u/[deleted]"],
  ["Draw a straight line and follow it.","La Monte Young"],
  ["...little whirlpools out in the middle of the ocean.","La Monte Young"],
  ["Most of them were very old grasshoppers.","La Monte Young"],
  ["Turn a butterfly (or any number of butterflies) loose","La Monte Young"],
  ]
shuffle(suggestions)

const App = () => {

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
    justifyContent: 'center',
    backgroundColor: 'rgb(255,250,240)'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
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

export default App;