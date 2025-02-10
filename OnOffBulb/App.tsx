import React, {useState} from 'react';
import {Switch, StyleSheet, Image, Text, View, ImageBackground} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const img1 = {
  uri: "https://cdn-icons-png.flaticon.com/512/515/515077.png",
  height:200,
  width: 200,
};
const img2 = {
  uri: "https://cdn-icons-png.flaticon.com/512/351/351818.png",
  height:200,
  width: 200,
};

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, {backgroundColor: isEnabled ? 'yellow': 'grey'}]} >
      <View style={styles.container}>
      {isEnabled? <Image source={img2}/> : (<Image source={img1}/>)};
        <Text >
          {isEnabled ? 'BulbON' : 'BulbOFF'}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: 'blue'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;