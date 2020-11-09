import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      {/* <ImageBackground  source={require('./assets/profile.jpg')} style={styles.imgBackground} blurRadius={ Platform.OS == 'ios' ? 10 : 5 } > */}
        
        <Image source={require("./assets/profile.jpg")} style={styles.image} />

        <View style={styles.profileInfo}>
          <Text style={styles.greyInfo}>School</Text>
          <Text style={{ fontSize: 17 }}>The Lawrenceville School</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.greyInfo}>Email</Text>
          <Text style={{ fontSize: 17 }}>danelrozar@gmail.com</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.blueInfo}>Name</Text>
          <Text style={{ fontSize: 17 }}>Daniel Rozar</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.blueInfo}>Nick Name</Text>
          <Text style={{ fontSize: 17 }}>r.denial</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.blueInfo}>Emergency Contact</Text>
          <Text style={{ fontSize: 17 }}>+1-987654321</Text>
        </View>

        <TouchableOpacity
          onPress={() => alert('Profile Updated!')}
          style={styles.button}>
          <Text style={styles.buttonText}>UPDATE PROFILE</Text>
        </TouchableOpacity>

        
        <StatusBar style="auto" />
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
  },
  
  // imgBackground: {
  //   position:'relative',
  //   width: '100%',
  //   height: '100%',
  //   opacity: 0.7,
    
  // },

  image: {
    marginTop: 80,
    marginBottom:50,
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 75,
  },

  profileInfo: {
    marginBottom: 20,
    alignItems: "flex-start",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.3,
    fontSize: 20,
  },

  greyInfo: {
    color: "grey",
  },

  blueInfo: {
    color: "deepskyblue",
  },

  button:{ 
    marginTop:50,
    backgroundColor: 'deepskyblue',
    padding: 15,
    borderRadius: 50,
  },

  buttonText:{
    fontSize: 20,
    color: 'white',
    textAlign:'center'
  },
});
