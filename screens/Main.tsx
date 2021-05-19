import * as React from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
// fonts
import { useFonts } from "expo-font";
import ContentLoader from "react-native-easy-content-loader";
// import * as Font from 'expo-font'

//icons

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

export default function Main({ navigation, route }: StackScreenProps<any>) {
  const [loading, setIsloading] = React.useState(true)
  const [weather, setWeather] = React.useState([]);
  const key = `bf8fdb8b9690f8726dde0e5fe0d89294`;
  const lat =`33.44`
  const lon = `-94.04`
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;
  const fetchData = async () => {
    let res = await fetch(URL);
    let data = await res.json();
    console.log(data);
    setIsloading(false)
    setWeather(data)
  };
  React.useEffect(() => {
    fetchData();
    
  }, []);
  const [loaded] = useFonts({
    SairaStencil: require("../assets/fonts/SairaStencilOne-Regular.ttf"),
    San: require("../assets/fonts/Sanchez-Regular.ttf"),
    Pop: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  if(loading){
    return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1,
      justifyContent: "center", backgroundColor:'grey'}} />
      // return <ContentLoader active />
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ zIndex: 10 }}>
        <Image
          style={{
            width: "100%",
            height: 210,
            position: "absolute",
            top: 155,
            zIndex: 1,
          }}
          source={require("../assets/images/cloud.png")}
        />
      </View>

      <View style={styles.main}>
        {/* logo */}
        <View style={styles.logo}>
          <Text
            style={{
              fontSize: 40,
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
            <Feather name="settings" size={24} color="white" />
            {/* <SimpleLineIcons name="menu" size={24} color="#fff" /> */}
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
          <View style={{ position: "absolute", bottom: 0, right: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <MaterialIcons
                name="add-circle-outline"
                size={24}
                color="white"
                style={{ backgroundColor: "#1278d6" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* details end */}
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            height: 40,
            marginTop: 100,
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 19, fontFamily: "San", paddingRight: 20 }}>
            Tuesday
          </Text>
          <Text style={{ fontSize: 19, fontFamily: "San" }}>Today</Text>
        </View>
        {/* line1 */}
        <View>
          <View style={styles.line}></View>
        </View>

        {/* temps */}
        <View style={styles.temps}>
          {/* tempsText */}
          <View
            style={{
              marginVertical: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Text style={styles.tempsText}>Now</Text>
            <Text style={styles.tempsText}>10AM</Text>
            <Text style={styles.tempsText}>11AM</Text>
            <Text style={styles.tempsText}>12PM</Text>
            <Text style={styles.tempsText}>1PM</Text>
            <Text style={styles.tempsText}>2PM</Text>
          </View>
          {/* tempsImages */}
          <View
            style={{
              marginVertical: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View style={styles.tempsText}>
              <MaterialCommunityIcons
                name="weather-pouring"
                size={24}
                color="black"
              />
            </View>
            <View style={styles.tempsText}>
              <MaterialCommunityIcons
                name="weather-partly-cloudy"
                size={24}
                color="black"
              />
            </View>
            <View style={styles.tempsText}>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View style={styles.tempsText}>
              <MaterialCommunityIcons
                name="weather-night-partly-cloudy"
                size={24}
                color="black"
              />
            </View>
            <View style={styles.tempsText}>
              <MaterialCommunityIcons
                name="weather-partly-rainy"
                size={24}
                color="black"
              />
            </View>
            <View style={styles.tempsText}>
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={24}
                color="black"
              />
            </View>
          </View>
          {/* tempsText2 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginVertical: 5,
            }}
          >
            <Text style={styles.tempsText}>21&deg;</Text>
            <Text style={styles.tempsText}>22&deg;</Text>
            <Text style={styles.tempsText}>23&deg;</Text>
            <Text style={styles.tempsText}>24&deg;</Text>
            <Text style={styles.tempsText}>25&deg;</Text>
            <Text style={styles.tempsText}>26&deg;</Text>
          </View>
        </View>
        {/* line2 */}
        <View>
          <View style={styles.line}></View>
        </View>
        {/* DaysTemps */}
        <ScrollView style={{ padding: 20, height: 500 }}>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 23 }}>Wednesday </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={{ fontSize: 23 }}>21&deg;</Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 23 }}>Thursday      </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={{ fontSize: 23 }}>23&deg;</Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 23 }}>Friday            </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={{ fontSize: 23 }}>24&deg;</Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 23 }}>Saturday       </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={{ fontSize: 23 }}>25&deg;</Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 23 }}>Sunday          </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={{ fontSize: 23 }}>26&deg;</Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 23 }}>Monday        </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={{ fontSize: 23 }}>27&deg;</Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 23 }}>Tuesday       </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="weather-sunny"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={{ fontSize: 23 }}>27&deg;</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1278D6",
    position: "relative",
    // flex:1,
    height: "40%",
    zIndex: 2,
    paddingTop: StatusBar.currentHeight,
  },

  main: {
    backgroundColor: "#1278D6",
    paddingHorizontal: 20,
    zIndex: 999,
    // height:'50%',
  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#1278D6",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 5,
  },
  temps: {
    paddingLeft: 30,
  },
  tempsText: {
    fontSize: 16,
    fontFamily: "Pop",
    paddingRight: 35,
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
