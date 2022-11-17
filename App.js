import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Dimensions, StyleSheet, Text, View, Image, Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button } from 'react-native';

export default function App() {


  const handlePress = () => console.log("Change again");

  return (
    <SafeAreaView style={styles.container} onPress={ handlePress } >
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
      backgroundColor: "darkbrown",
      width: "100%",
      height: "50%",
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
