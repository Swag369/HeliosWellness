import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,size, Input, fontSize, color, TouchableWithoutFeedback } from 'react-native';


export default function App() {
  
  return (

    
    
    <View style={styles.container}>
      <View style={styles.container}>

      <Image source={{
        width: 420,
        height: 35,
        position: 'absolute',
        right: 5,
        top: 5,
       
      uri: "https://media.discordapp.net/attachments/770271623303004160/883894089932750929/dd_1.png", 
      }} 
      />

      


       <Image source={{
        width: 420,
        height: 330,

        
       
       
      uri: "https://media.discordapp.net/attachments/770672304745087028/883890815204737024/Hww.png?width=492&height=369", 
      }} 
      />
      
        <Image source={{
        width: 420,
        height: 35,
        position: 'absolute',
        right: 5,
        top: 5,
       
      uri: "https://media.discordapp.net/attachments/770271623303004160/883894089932750929/dd_1.png", 
      }} 
      />


       
        <TouchableOpacity onClick={() => console.log ("Image tapped")}>

       <Image source={{
        width: 420,
        height: 330,
        position: 'absolute',
        right: 5,
        top: 5,
       
      uri: "https://media.discordapp.net/attachments/770271623303004160/884049529731698748/Product_2.png?width=985&height=369", 
      }} 
      />
      </TouchableOpacity>

       




<Image source={{
        width: 420,
        height: 35,
        position: 'absolute',
        right: 5,
        top: 5,
       
      uri: "https://media.discordapp.net/attachments/770271623303004160/883894089932750929/dd_1.png", 
      }} 
      />

   </View>
     </View>
     );
    }




const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#93ff93',
    padding: 20,
  },
  body: {
    backgroundColor: 'lime',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
   });
  
  
