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

export default function Lang({ navigation, route }: StackScreenProps<any>) {
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
            Language
          </Text>
        </View>
      </View>
      {/* <View>
                  <View style={{width:'100%', height:1, backgroundColor:'black',}}></View>
            </View> */}

      {/* search */}
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#ccc",
          marginTop: 20,
        }}
      ></View>
      <TouchableOpacity>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                margin: 15,
              }}
            >
              <View>
                <Text style={{ fontSize: 18, marginBottom: 4 }}>English</Text>
                <Text style={{ fontSize: 12 }}>English</Text>
              </View>
              <View style={{ marginRight: 60 }}>
                <AntDesign name="check" size={24} color="#1278D6" />
              </View>
            </View>
            <View
              style={{ width: "100%", height: 1, backgroundColor: "#ccc" }}
            ></View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              margin: 15,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, marginBottom: 4 }}>German</Text>
              <Text style={{ fontSize: 12 }}>Deutsch</Text>
            </View>
            {/* <View style={{ marginRight: 60 }}>
              <AntDesign name="check" size={24} color="#1278D6" />
            </View> */}
          </View>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#ccc" }}
          ></View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              margin: 15,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, marginBottom: 4 }}>Italian</Text>
              <Text style={{ fontSize: 12 }}>Italiano</Text>
            </View>
            {/* <View style={{ marginRight: 60 }}>
              <AntDesign name="check" size={24} color="#1278D6" />
            </View> */}
          </View>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#ccc" }}
          ></View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              margin: 15,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, marginBottom: 4 }}>Dutch</Text>
              <Text style={{ fontSize: 12 }}>Nederland</Text>
            </View>
            {/* <View style={{ marginRight: 60 }}>
              <AntDesign name="check" size={24} color="#1278D6" />
            </View> */}
          </View>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#ccc" }}
          ></View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              margin: 15,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, marginBottom: 4 }}>Polish</Text>
              <Text style={{ fontSize: 12 }}>Polski</Text>
            </View>
            {/* <View style={{ marginRight: 60 }}>
              <AntDesign name="check" size={24} color="#1278D6" />
            </View> */}
          </View>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#ccc" }}
          ></View>
        </View>
      </TouchableOpacity>
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
