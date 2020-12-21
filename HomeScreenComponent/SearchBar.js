
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style'

const SearchBar=(props)=>{
     
    const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <View style={styles.SectionStyle}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} >
        <Image source={require('../Icon/Hamburger_icon.png')} style={styles.ImageStyle} />
        </TouchableOpacity>
        <TextInput
						onChangeText={props.settext}
              style={{flex:1}}
              placeholder="Rechercher votre tâche"
              underlineColorAndroid="transparent"
          />
        </View>
    </View>
      );
}


export default SearchBar;