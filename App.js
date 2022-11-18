import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Alert, TouchableNativeFeedback, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();


  const handlePress = () => console.log("Change again");

  return (
    <SafeAreaView style={styles.container} onPress={ handlePress } >

      <View style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

      }}>
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }} />
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          justifyContent: "center",
        }} />
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "absolute",
        }} />
      </View>
      <Image source={require('./assets/favicon.png')} />
      <Text numberOfLines={3}>Hello Collins Tatang</Text>
      <Button color="gray" 
              title='Click Me' 
              onPress={() => Alert.alert("Click Title", "My message", [
                {text: "Yes", onPress: () => console.log("Yes")},
                {text: "No", onPress: () => console.log("No")}
              ])}/>
      <TouchableNativeFeedback onPress={() => console.log("Without Onscreen")}>   
        <View style={{ width: 150, height: 70, backgroundColor: "dodgerblue" }}></View>
      </TouchableNativeFeedback>

      <Button color="gray" 
              title='Click Promt' 
              onPress={() => Alert.prompt("Click Title", "My message", (text) => console.log(text) )}/>
     <View style={{
      backgroundColor: "brown",
      width: "100%",
      height: landscape ? "100%" : "30%",
     }}></View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
