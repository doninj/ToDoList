import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,CheckBox,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ModalUpdate from '../ModalUpdate';
import RoundCheckbox from 'rn-round-checkbox';

const Task =(props) =>{
	const [showModal, setShowModal] = React.useState(false);
	const [ischecked, setischecked] = React.useState(true);
	//Fonction
	const valueChange=(ischecked)=>{
		ischecked=>setischecked(ischecked)
	}
	const handlebutton=()=>{
		setShowModal(!showModal);
	}

    return (
      <View style={styles.task}>
				<ModalUpdate showModal={showModal} taskName={props.text} taskDescription={props.description} handlebutton={handlebutton} ></ModalUpdate>
        <View style={{ flex:1,flexDirection:"row",justifyContent:'space-between',marginTop:15,}}>
				{ischecked ?
					<TouchableOpacity style={{ backgroundColor:"red" }} onPress={props.completed}>
						<MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="black" />
     			 </TouchableOpacity>
				:	 <TouchableOpacity style={{ backgroundColor:"blue" }} onPress={props.completed}>
						<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="black" /></TouchableOpacity>
				}
				<TouchableOpacity  onPress={handlebutton}>
          <Text style={styles.TextTasks }> {props.text}</Text>
					</TouchableOpacity>
          <TouchableOpacity onPress={props.ondelete}>
					<MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
          </View>
      </View>
        );
  }

  export default Task;