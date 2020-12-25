import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ModalUpdate from '../ModalUpdate';
import RoundCheckbox from 'rn-round-checkbox';
import Checkbox from '../Checkbox'
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
	const conditionPriority= () =>{
    if (props.priority==0) {
			return <View></View>

		}
		if (props.priority==1) {
			return <MaterialIcons name="flag" size={24} color="blue" />
		}
		if (props.priority==2) {
			return <MaterialIcons name="flag" size={24} color="orange" />
		}
		if (props.priority==3) {
			return <MaterialIcons name="flag" size={24} color="red" />
    }
     return <Text> Forgot Password </Text>; 
}
const conditionCheckbox= (completed) =>{
		
	if (completed=="false") {
		return <MaterialCommunityIcons style={{paddingRight:5}} name="checkbox-blank-circle-outline" size={24} color="black" />
	}
	else{
	 return	<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="black" />
	}
}
    return (
			<View style={styles.task}>
			<ModalUpdate showModal={showModal}  taskfinish={props.completed} delete={props.ondelete} taskPriority={props.priority} taskName={props.text} taskCompleted={props.taskcompleted} taskDescription={props.description} handlebutton={handlebutton} ></ModalUpdate>
        <View style={{ flex:1,flexDirection:"row",marginTop:15}}>
				<TouchableOpacity  onPress={props.completed}>
		{conditionCheckbox(props.taskcompleted)}
</TouchableOpacity>
				<TouchableOpacity style={{ width:300 }} onPress={handlebutton}>
          <Text style={styles.TextTasks }> {props.text}</Text>
					</TouchableOpacity>
					<View style={{width:30,paddingRight:5}} >
					{conditionPriority()}
					</View>
          <TouchableOpacity style={{paddingLeft:10}} onPress={props.ondelete}>
					<MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
          </View>
				
      </View>
        );
  }

  export default Task;