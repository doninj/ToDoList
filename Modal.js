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
	<TouchableOpacity  onPress={()=>props.settaskPriority(1)}>
	<MaterialIcons name="flag" size={36} color="blue" />
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>props.settaskPriority(2)} >
	<MaterialIcons name="flag" size={36} color="orange" />
			</TouchableOpacity>
			<TouchableOpacity  onPress={()=>props.settaskPriority(3)} >
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
const styles = StyleSheet.create({
  modal: {
    padding: 10,
    marginLeft: '1%',
    marginRight: '1%',
    position: 'absolute',
    bottom: 0,
    width: '98%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  header: {
    borderRadius: 10,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 45,
    borderColor: '#CCC',
  },
  buttonText: {
    color: '#333',
    fontSize: 50,
    alignSelf: 'center',
  },
  bottomArea: {
    height: '100%',
  },
})

export default ModalPerso;