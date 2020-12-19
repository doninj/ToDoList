import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView, KeyboardAvoidView,View } from 'react-native';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons'; 

const BLUE= "#7384f0";
const LIGHT_GREY="#428AF8"
const ModalPerso =(props)=>{

	React.useEffect(() => {

	}, []);
	return(
<Modal 
onBackButtonPress={() =>props.handlebutton()}
isVisible={props.showModal}
transparent={true}
>
<View style={{ flexDirection:'column',backgroundColor:"white",height:250,marginTop:200,padding:40,borderRadius:50}}>
	<View>
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
	</View>
			<Text>Priorité:</Text>
		<View style={{flexDirection:"row",backgroundColor:"white"}}>
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
			<View>
	<TouchableOpacity onPress={()=>props.addItem()} style={{width:50,alignSelf:"flex-end",justifyContent:"space-around",alignItems:"flex-end"}}>
	<MaterialIcons name="send" size={36} color="black" />
	</TouchableOpacity>
	</View>
</View>
</Modal>
	)
}
export default ModalPerso;