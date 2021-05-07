import * as React from 'react';
import { StyleSheet, Image,Button, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
// icons
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// fonts
import {useFonts} from 'expo-font'

export default function TabOneScreen({navigation,route}:StackScreenProps<any>) {
  const [loaded] = useFonts({
    SairaStencil: require('../assets/fonts/SairaStencilOne-Regular.ttf'),
    Pop: require('../assets/fonts/Poppins-Regular.ttf'),
  })
  if(!loaded){
    return null
  }
  return (
    <View style={styles.container}>
        <View>
          <Text style={{fontSize: 60, bottom:30, fontWeight:'bold', color: '#1249D6', fontFamily:'SairaStencil'}}>W</Text>
        </View>
        
        <View>
            <Image 
      style={{width: 450, height:400}}
      source ={require ('../assets/images/wind-man.jpg')}
          />
        </View>

        <View style={{marginHorizontal:60}}>
          <Text style={{fontSize:16, paddingBottom: 20, textAlign:'center', fontFamily:'Pop'}}>Welcome to winco weather! The most accurate and reliable weather forecasts in the globe.</Text>
        </View>

        <View style={{flexDirection:"row", }}>
        <FontAwesome name="circle" style={{marginRight:15}} size={11} color="#1278D6" />
        <Feather name="circle"  size={11} color="#888" />
        </View>

          {/* Buttons */}
      <View style={{  paddingTop:40, flexDirection:'row', alignItems:"center", justifyContent:'space-between'}}> 
          <TouchableOpacity style={{backgroundColor:'#1278D6', borderRadius:5, marginRight:200}}>
            <Text style={{color:'white', padding:10, fontSize: 16, fontFamily:'Pop'}}>SKIP</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{navigation.navigate("TabTwo")}} style={{backgroundColor:'#1278D6', borderRadius:5, }}>
            <Text style={{color:'white', padding:10, fontSize: 16, fontFamily:'Pop'}}>NEXT</Text>
          </TouchableOpacity>

          {/* <Button title="Next" onPress={()=> alert('Next')}/> */}
        
      </View>
    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
