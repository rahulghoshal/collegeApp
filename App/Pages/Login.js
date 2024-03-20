import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../Shared/color'
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  
  return (
    <View>
      <Image source={require('./../Assets/Images/img1.png')} />
        <View style={styles.container}>
        <Text style={styles.welcometext}>Vivekananda College App</Text>
        </View>
        <Text style={{fontSize:25,textAlign:'center',fontWeight:'500',marginTop:80}}>Login Or Signup</Text>
        <TouchableOpacity style={styles.button} 
        onPress={()=>promptAsync()}>
            <AntDesign name="google" size={24} color="white" style={{marginRight:10}} />
            <Text style={{color:color.white}}>Signin with Google</Text>
          </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingTop:80,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopRightRadius:25,
        borderTopLeftRadius:25

    },
    welcometext:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
    },
    button:{
        backgroundColor:color.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    }
})