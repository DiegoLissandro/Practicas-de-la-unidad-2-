import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


const NavigationButton = ({ title, onPress }) => {
  return (
    <Button title={title} onPress={onPress} />
  );
};

function Title({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    
      <NavigationButton title="GO Home" onPress={() => navigation.navigate('Home')} />
      <StatusBar style="auto" />
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    
      <NavigationButton title="Go Details " onPress={() => navigation.navigate('Details')} />
      <StatusBar style="auto" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
