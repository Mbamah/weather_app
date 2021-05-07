import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// navigation
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// icons
import { AntDesign } from '@expo/vector-icons';
import { Value } from 'react-native-reanimated';
// fonts
import {useFonts} from 'expo-font'
// import * as Font from 'expo-font'



export default function Search({navigation,route}:StackScreenProps<any>) {
    
    const [value, setValue] = React.useState('')
    const [loaded] = useFonts({
        SairaStencil: require('../assets/fonts/SairaStencilOne-Regular.ttf'),
        San: require('../assets/fonts/Sanchez-Regular.ttf'),
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
        
        {/* Location */}
        <View style={{paddingTop:20}}> 
            <Text style={{fontSize:18, fontFamily:"San"}}>Enter city, zip code or location</Text>
        </View>

        {/* search */}
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:30}}>
            <TextInput 
                autoFocus
                keyboardType='web-search'
                clearTextOnFocus
                onChangeText={(text)=>{setValue(text)}} 
                value={value}
                placeholder={'eg. Accra'} 
                style={styles.input}/>
            <TouchableOpacity onPress={(text)=>{setValue('')}}>
                <Text style={{fontSize:21, fontFamily:'San'}}>Cancel</Text>
            </TouchableOpacity>
        </View>
            
    </View>
    </SafeAreaView>


    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex:1
  },
  main:{
    backgroundColor: '#fff',
    marginHorizontal: 20,
  
  },
  logo:{
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems:'center',
    marginTop:40

  },
  input:{
    height:50,width:'80%',
    borderRadius:10, 
    backgroundColor:'#ddd',
    color:'black', 
    fontSize:18, 
    paddingLeft:12, 
    borderColor:'#ddd', 
    borderWidth:1
  }
});
