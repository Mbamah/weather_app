import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Button} from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';

export default function App() {
  return (
    
    <View style={styles.container}>

      <View style={styles.set}>
        <View>
              <Text>
                    W
              </Text>
        </View>

              <View>
                  <Text>
                    Settings
                  </Text>
              </View>
        <View>
            <Text>
              Notification
            </Text>
        </View>
          <Text>
            Units
          </Text>
        <View>
          <Text>
            Language
          </Text>
        </View>

       



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
  set: 
    { backgroundColor: '#1278D6',
    width: '100%',
    height: '80%', 
    position: 'absolute', 
    top: 10,
  }
  
});
