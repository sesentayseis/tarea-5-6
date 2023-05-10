import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
    <Text 
        style={{
            fontSize:30,
            textAlign: 'center',
            marginTop:'20%'
        }}
      >Galeria de imagenes</Text>
    <View style={styles.row}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />
    </View>
    <View style={styles.row}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />
    </View>
  </View>
  );
  }  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    image: {
      flex: 1,
      borderRadius: 10,
      marginHorizontal: 5,
    },
  });


export default SettingsScreen