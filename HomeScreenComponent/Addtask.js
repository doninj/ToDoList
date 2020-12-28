import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AddTasks=(props)=>{

    const navigation=useNavigation();
    return (
			<View style={stylesAdd.container}>
			<View style={stylesAdd.SectionStyleAdd}>
				<TouchableOpacity onPress={props.press}  style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:60}} >
					<Text style={stylesAdd.Textadd}>+</Text>
				</TouchableOpacity>
			</View>
			</View>
      );
    }
		const stylesAdd = StyleSheet.create({
			container: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				margin: 10
			},
				Textadd:{
					color:"#f9aa33",
					fontSize:50
				},
				SectionStyleAdd: {
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#344955',
					borderWidth: .5,
					borderColor: '#000',
					height: 60,
					borderRadius: 50,
					margin: 10,
					elevation:6,
					shadowColor:"black"
			},
		})
    export default AddTasks;