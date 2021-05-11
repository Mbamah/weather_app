import * as React from "react";
import { useState } from "react";
import { StyleSheet, Switch, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
// navigation
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
// icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Value } from "react-native-reanimated";
// fonts
import { useFonts } from "expo-font";
// import * as Font from 'expo-font'

export default function Notifications({
  navigation,
  route,
}: StackScreenProps<any>) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = React.useState("");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [loaded] = useFonts({
    SairaStencil: require("../assets/fonts/SairaStencilOne-Regular.ttf"),
    San: require("../assets/fonts/Sanchez-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {/* logo */}
        <View style={styles.logo}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 60,
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
              fontFamily: "San",
            }}
          >
            Notifications
          </Text>
        </View>
        {/* <View>
                  <View style={{width:'100%', height:1, backgroundColor:'black',}}></View>
            </View> */}

        {/* search */}
        <View>
          <View
            style={{
              marginVertical: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 20 }}>Show Notifications</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: "#fff", true: "#1278D6" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#ccc"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  main: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  logo: {
    flexDirection: "row",
    //     justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});
