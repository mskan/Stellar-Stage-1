import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackUtils from 'stack-utils';
import DailyPicScreen from './screens/DailyPic';
import HomeScreen from './screens/Home';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function App(){
  return(
    <NavigatioContainer>
      <Stack.Navigator intialRouteName='Home' screenOptions={{
        headerShown: flse
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigatioContainer>
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
