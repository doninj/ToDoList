import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView, KeyboardAvoidView,View } from 'react-native';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const BLUE= "#7384f0";
const LIGHT_GREY="#428AF8"
const ModalUpdate =(props)=>{

	const conditionPriority= (priorite) =>{
    if (priorite==0) {
			return <View></View>
		}
		if (priorite==1) {
			return <MaterialIcons name="flag" size={60} color="blue" />
		}
		if (priorite==2) {
			return <MaterialIcons name="flag" size={60} color="orange" />
		}
		if (priorite==3) {
			return <MaterialIcons name="flag" size={60} color="red" />
    }
}
const conditionCheckbox= (completed) =>{
    
	if (completed=="false") {
		return <MaterialCommunityIcons style={{paddingRight:5}} name="checkbox-blank-circle-outline" size={24} color="black" />
	}
	else{
	 return	<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="black" />
	}
}
const ButtonsDeleteorFinish= (completed) =>{
    
	if (completed=="false") {
		return 	<View style={{ bottom:0,position:"absolute",width:"100%",flexDirection:"row" }}>
			<TouchableOpacity onPress={props.delete} style={{ width:'50%',borderWidth:1 ,justifyContent:"center",height:60,alignItems:'center',flexDirection:"row"}}>
		<MaterialIcons name="delete" size={24} color="black" />
		<Text style={{ fontSize:20 }}>Supprimer la tâche</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={props.taskfinish} style={{ width:'50%',borderWidth:1 ,justifyContent:"center",height:60,alignItems:'center',flexDirection:"row"}}>
		<MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="black" />		
			<Text style={{  fontSize:20  }}>Terminer tâche</Text>
		</TouchableOpacity>
		</View>
	}
	else{
	 return	<View style={{ bottom:0,position:"absolute",width:"100%",flexDirection:"row" }}>
		 <TouchableOpacity onPress={props.delete} style={{ width:'100%',borderWidth:1 ,justifyContent:"center",height:60,alignItems:'center',flexDirection:"row"}}>
	 <MaterialIcons name="delete" size={24} color="black" />
	 <Text style={{ fontSize:20 }}>Supprimer la tâche</Text>
	 </TouchableOpacity>
	 </View>
	}
}
	return(
<Modal style={{ margin:0,justifyContent:"flex-end"}}
onBackButtonPress={() =>props.handlebutton()}
isVisible={props.showModal}
transparent={true}
>
<View style={{ height:'40%',backgroundColor:"white",borderTopRightRadius:50,borderTopLeftRadius:50}}>
	<View style={{ marginTop:20,marginLeft:20 }}>
	<View style={{ flexDirection:"row",alignItems:'center' }}>
	<FontAwesome style={{paddingRight:5}}name="tasks" size={20} color="blue" />
	<Text style={{ fontSize:30,fontWeight:'bold'}}>Détails de la tâche  </Text>
	</View>
	<View style={{ flexDirection:"row",alignItems:'center' }}>
{conditionCheckbox(props.taskCompleted)}	
<Text style={{ fontSize:20}}>{props.taskName}  </Text>
	</View>

	<Text style={{ marginLeft:20,marginTop:20,fontSize:20,fontWeight:'bold'}}>Description de la tâche:  </Text>
	<Text  style={{}}underlineColorAndroid={"#D3D3D3"}	> {props.taskDescription}
	</Text>
		{conditionPriority(props.taskPriority)}
</View>
		<View style={{ bottom:0,position:"absolute",width:"100%",flexDirection:"row" }}>
		{ButtonsDeleteorFinish(props.taskCompleted)}
		</View>
</View>
</Modal>
	)
}
export default ModalUpdate;