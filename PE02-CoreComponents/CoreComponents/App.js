import React from "react";
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <View style={{padding: 50}}>
        <Image
          source={require('./assets/icon.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      <Text>Which course did you like?</Text>
      <View style={{paddingLeft: 10}}>
        <TextInput
          style={{width: 300, height: 40, borderWidth: 1, borderColor: 'grey'}}
          placeholder="ex. CS624"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Core Requirements (24 Credits)</Text>
        <Text>CS 504 Software Engineering</Text>
        <Text>CS 506 Programming for Computing</Text>
        <Text>CS 519 Cloud Computing Overview</Text>
        <Text>CS 533 Computer Architecture</Text>
        <Text>CS 547 Secure Systems and Programs</Text>
        <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text>DS 510 Artificial Intelligence for Data Science</Text>
        <Text>DS 620 Machine Learning & Deep Learning</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Depth of Study (6 Credits)</Text>
        <Text>CS 624 Full-Stack Development I</Text>
        <Text>CS 628 Full-Stack Development II</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Capstone (3 Credits)</Text>
        <Text>CS 687 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#fae100',
  },
});

export default App;