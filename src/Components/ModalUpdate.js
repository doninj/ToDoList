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
		return 	<View style={styles.ViewButton}>
			<TouchableOpacity onPress={props.delete} style={styles.buttondetailstodo}>
		<MaterialIcons name="delete" size={24} color="#F9AA33" />
		<Text style={styles.textButton}>Supprimer la tâche  </Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={props.taskfinish} style={styles.buttondetailstodo}>
		<MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#F9AA33" />		
			<Text style={styles.textButton}>Terminer tâche  </Text>
		</TouchableOpacity>
		</View>
	}
	else{
	 return	<View style={styles.ViewButton}>
		 				<TouchableOpacity onPress={props.delete} style={styles.buttondetailsdone}>
	 					<MaterialIcons name="delete" size={24} color="#F9AA33" />
						<Text style={styles.textButton}>Supprimer la tâche  </Text>
						</TouchableOpacity>
	 				</View>
	}
}
	return(
	<Modal style={{ margin:0,justifyContent:"flex-end"}}
		onBackButtonPress={() =>props.handlebutton()}
		isVisible={props.showModal}
		transparent={true}>
		<View style={styles.container}>
			<View style={{ marginTop:20,marginLeft:20 }}>
				<View style={{ flexDirection:"row",alignItems:'center' }}>
					<FontAwesome style={{paddingLeft:20,paddingRight:10}}name="tasks" size={20} color="#F9AA33" />
					<Text style={styles.text}>Détails de la tâche  </Text>
				</View>
				<View style={styles.ViewTitreTâche}>
					{conditionCheckbox(props.taskCompleted)}	
					<Text style={{ fontSize:20}}>{props.taskName}  </Text>
				</View>
				<Text style={styles.TitreDescription}>Description de la tâche:</Text>
				<Text  style={styles.description}> {props.taskDescription} </Text>
				{conditionPriority(props.taskPriority)}
			</View>
			<View style={styles.ViewButton}>
				{ButtonsDeleteorFinish(props.taskCompleted)}
			</View>
		</View>
	</Modal>
	)
}
const styles = StyleSheet.create({
text:{
	fontSize:20,
	color:"#F9AA33",
	fontWeight:'bold'
},
textButton:{
	fontSize:18,
	color:"#F9AA33",
	fontWeight:'bold'
},
description:{
	fontSize:18,
	marginLeft:17,
	marginTop:10
},
ViewTitreTâche:{
	marginTop:10, 
	paddingLeft:20,
	flexDirection:"row",
	alignItems:'center'
},
TitreDescription:{
	marginLeft:20,
	marginTop:20,
	fontSize:20,
	fontWeight:'bold'
},
buttondetailstodo:{
	backgroundColor: '#4A6572',
	width:'50%',
	borderWidth:1 ,
	justifyContent:"center",
	height:60,alignItems:'center',
	flexDirection:"row"
},
buttondetailsdone:{
	backgroundColor:'#4A6572',
	width:'100%',borderWidth:1 ,
	justifyContent:"center",height:60,
	alignItems:'center',
	flexDirection:"row"
},
ViewButton:{
	 bottom:0,
		position:"absolute",
		width:"100%",
		flexDirection:"row" 
},
container:{
	 height:'40%',
	backgroundColor:"white",
	borderTopRightRadius:50,
	borderTopLeftRadius:50
}
})

export default ModalUpdate;