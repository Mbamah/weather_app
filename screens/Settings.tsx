import * as React from 'react';
import { StyleSheet, Image,Button, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// Navigation
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {useFonts} from 'expo-font'

// import { 
//   useFonts, SairaStencilOne_400Regular 
// } from '@expo-google-fonts/saira-stencil-one'


export default function Settings({navigation,route}:StackScreenProps<any>) {
  const [loaded] = useFonts({
    SairaStencil: require('../assets/fonts/SairaStencilOne-Regular.ttf'),
    San: require('../assets/fonts/Sanchez-Regular.ttf'),
    Pop: require('../assets/fonts/Poppins-Regular.ttf')

  })
  if(!loaded){
    return null
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
      {/* logo */}
      <View style={styles.logo}>
        <Text style={{fontSize: 50, fontWeight:'bold', color: '#1249D6', fontFamily:'SairaStencil'}}>W</Text>
        <TouchableOpacity onPress={() =>{navigation.navigate('Home')}}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <View>
        <Text style={{fontSize:36, paddingVertical:25, fontFamily:'San'}}>Settings</Text>
      </View>

      {/* content */}
      <View >
      {/* notification start */}
        <TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
            <MaterialIcons name="notifications-active" size={24} color="black" /> 
            <View style={{paddingLeft:20}}>
            <Text style={{fontSize:24, fontFamily:'San'}}>Notification</Text>
            <Text style={{fontFamily:"Pop"}}>Daily notifications</Text>
            </View>
          </View>
          <View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </View>
        </TouchableOpacity>
        {/* notification end */}
        {/* Units start */}
        <TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'space-between' , marginVertical:70}}>
          <View style={{flexDirection:'row'}}>
            <Ionicons name="chatbox-outline" size={24} color="black" />
            <View style={{paddingLeft:20}}>
            <Text style={{fontSize:24, fontFamily:'San'}}>Units</Text>
            <Text style={{fontFamily:"Pop"}}>Customize data</Text>
            </View>
          </View>
          <View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </View>
        </TouchableOpacity>
        {/* units end */}
        {/* language start */}
        <TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
            <Fontisto name="world-o" size={24} color="black" />
            <View style={{paddingLeft:20}}>
            <Text style={{fontSize:24, fontFamily:'San'}}>Language</Text>
            <Text style={{fontFamily:"Pop"}}>English </Text>
            </View>
          </View>
          <View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </View>
        </TouchableOpacity>
        {/* language end */}
      </View>





    </View>
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    // color:'red'
    backgroundColor:'white',
    flex:1
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  
  },
  logo:{
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems:'center',
    marginTop:0

  },
  button:{
    position: 'absolute',
    fontStyle: 'normal',
    width: '42px',
    height: '30px',
    left: '46px',
    top: '733px',   
  }
});
