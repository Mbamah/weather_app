import * as React from "react";
import { StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
// fonts
import { useFonts } from "expo-font";
// import * as Font from 'expo-font'

//icons
// import { AntDesign } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

export default function Main({ navigation, route }: StackScreenProps<any>) {
  const [weather, setWeather] = React.useState([])
  const key= `a0e002ea5db68525a641a39bae1bab58` 
  const URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`
  const fetchData = async () =>{
    let res = await fetch(URL)
    let data = await res.json()
    console.log(data);
    
  }
  React.useEffect(()=>{
    fetchData()
  },[])
  const [loaded] = useFonts({
    SairaStencil: require("../assets/fonts/SairaStencilOne-Regular.ttf"),
    San: require("../assets/fonts/Sanchez-Regular.ttf"),
    Pop: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{zIndex:10,}}>
        <Image style={{width:"100%", height:215, position:'absolute', top:215, zIndex:1}} source={require('../assets/images/cloud.png')}/>
      </View>

      <View style={styles.main}>
        {/* logo */}
        <View style={styles.logo}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "SairaStencil",
            }}
          >
            W
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <SimpleLineIcons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* weather Details */}
        <View style={styles.details}>
          {/* Location */}
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 28,
                backgroundColor: "#1278D6",
                color: "white",
                fontFamily: "San",
              }}
            >
              Tamale
            </Text>
          </View>
          {/* word */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 18,
                backgroundColor: "#1278D6",
                color: "white",
                fontFamily: "San",
              }}
            >
              Partly cloudy
            </Text>
          </View>
          {/* temp */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 86,
                backgroundColor: "#1278D6",
                color: "white",
                fontFamily: "Pop",
              }}
            >
              23&deg;
            </Text>
          </View>
          {/* add icon */}
          <View style={{ position: "absolute", bottom: 0, right:10 }}>
            <TouchableOpacity onPress={() =>{navigation.navigate('Search')}}>
              <MaterialIcons
                name="add-circle-outline"
                size={25}
                color="white"
                style={{backgroundColor:'#1278d6'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* details end */}
      </View>
      <View style={{ backgroundColor: "white", margin:100}}>
        <Text>efh</Text>
        <Text>efh</Text>
        <Text>efh</Text>

        <Text>efh</Text>

        <Text>efh</Text>

        <Text>efh</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#1278D6",
    position:'relative',
    // flex:1,
    height: "45%",
    zIndex: 2,
  },
  
  main: {
    backgroundColor: "#1278D6",
    paddingHorizontal: 20,
    zIndex:999
    // height:'50%'
  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#1278D6",
  },
  details: {
    // flex: 1,
    position: "relative",
    height: "80%",
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#1278D6",
  },
});
