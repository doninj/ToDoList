import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView, KeyboardAvoidView,View } from 'react-native';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons'; 

const BLUE= "#7384f0";
const LIGHT_GREY="#428AF8"
const ModalUpdate =(props)=>{
	return(
<Modal 
onBackButtonPress={() =>props.handlebutton()}
isVisible={props.showModal}
transparent={true}
>
<View style={{ backgroundColor:"white",height:400,marginTop:300,padding:40,borderRadius:50}}>
	<TextInput   
		style={{height: 40,width:300}}	
		underlineColorAndroid={"#D3D3D3"} 
		placeholder="Nom tâches:" 
		value={props.taskName}
		onChangeText={taskName=>props.settaskName(taskName)} 
		>
	</TextInput>
	<TextInput   
	style={{height: 40,width:300}}
	value={props.taskDescription}
	underlineColorAndroid={"#D3D3D3"} 
	placeholder="Description de la tâches:" 
	onChangeText= {taskDescription=>props.settaskDescription(taskDescription)} 
	>
	</TextInput>
			<Text>Priorité:</Text>
		<View style={{flex:1,flexDirection:"row"}}>
	<TouchableOpacity  onPress={()=>props.settaskPriority("faible")}>
	<MaterialIcons name="flag" size={36} color="blue" />
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>props.settaskPriority("moyen")} >
	<MaterialIcons name="flag" size={36} color="orange" />
			</TouchableOpacity>
			<TouchableOpacity  onPress={()=>props.settaskPriority("haute")} >
	<MaterialIcons name="flag" size={36} color="red" />
			</TouchableOpacity >
			</View>
			<TouchableOpacity style={{height:30,width:100,borderColor:BLUE,borderWidth:2,borderRadius:50,justifyContent:"center"}}
		onPress={()=>props.addItem()}>
		<Text> Créer la tâche</Text>
	</TouchableOpacity>
</View>
</Modal>
	)
}
export default ModalUpdate;