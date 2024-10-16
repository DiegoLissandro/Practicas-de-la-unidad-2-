import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text> </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Details</Text>
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

export default MScreen;
