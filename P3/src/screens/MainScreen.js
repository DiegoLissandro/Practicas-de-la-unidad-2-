import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Text> </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Main')}>
        <Text style={styles.buttonText}>Back to Main</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>First screen in stack</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
