
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { PlayCircleFilledWhite } from '@material-ui/icons';


const SearchBar=(props)=>{
     
    const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <View style={styles.SectionStyle}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} >
						<MaterialIcons style={{ paddingRight:15 }}name="dehaze" size={24} color="#F9AA33" />
						</TouchableOpacity>
        <TextInput 
						onChangeText={props.settext}
              style={styles.text}
							placeholder="Rechercher votre tâche"
							placeholderTextColor="lightgrey"
							underlineColorAndroid="transparent"
							maxLength={25}
          />
        </View>
    </View>
      );
}
const styles = StyleSheet.create({
	text:{flex:1,
	color:'white'
	},
	SectionStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4A6572',
		borderWidth: .5,
		height: 40,
		borderRadius: 5 ,
		elevation:10,
		margin: 10
},
container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	margin: 10
},
})

export default SearchBar;