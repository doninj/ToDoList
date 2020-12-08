import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView, KeyboardAvoidView,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import Modal from 'react-native-modal';
import SearchBar from './HomeScreenComponent/SearchBar';
import styles from './Style';
import { Dimensions } from 'react-native';
import AddTasks from './HomeScreenComponent/Addtask';
import Tasks from './HomeScreenComponent/Task';
import ModalScreen from './ModalTester';

const BLUE= "#7384f0";
const LIGHT_GREY="#428AF8"

const Buttons = (props)=>{
  return(
  <View style={styles.container}>
    <View style={styles.SectionStyleAdd}>
      <TouchableOpacity onPress={props.press}  style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:200}} >
        <Image source={require('./Icon/add.png')} style={styles.ImageStyle} />
    		<Text> Créer une tâche</Text>
    	</TouchableOpacity>
    </View>
		</View>
  )
}
export default function HommeScreen(props) {
	const [isFocused, setisFocused] = useState(false);
  const [tasks, settasks] = useState([]);
	const [taskName,settaskName] = useState("");
	const [taskDescription, settaskDescription] = useState("");
	const [showModal, setShowModal] = useState(false);

	const	deleteItem = (index) => {
		console.log("salut")
		const tmp= tasks.splice(index,1)
		console.log(tmp)
	};
	const addItem = event => 
		{
		settasks([
			...tasks,
			{
				id: tasks.length,
				name: taskName,
				description:taskDescription,
			}
		]);
		settaskName("");
		settaskDescription("");
		console.log(tasks)
	};
	
	const handlefocus = (event) =>{
		setisFocused({isFocused:true})
		if(props.onFocus){
			props.onFocus(event);
	}
}
	const handlebutton=()=>{
		setShowModal(!showModal);
}
  return (
<View style={{ flex:1 }}>
	<Modal 
		onBackButtonPress={() =>handlebutton()}
		isVisible={showModal}
		transparent={true}
  >
		<View style={{ backgroundColor:"white",height:400,marginTop:300,padding:40,borderRadius:50}}>
			<TextInput   
				style={{height: 40,width:300}}	
				selectionColor={isFocused ? BLUE : LIGHT_GREY} 
				underlineColorAndroid={"#D3D3D3"} 
				placeholder="Nom tâches:" 
				value={taskName}
				onChangeText={tasks => settaskName(tasks)} >
			</TextInput >

			<TextInput   
			style={{height: 40,width:300}}
			value={taskDescription}
			selectionColor={isFocused ? BLUE : LIGHT_GREY} 
			underlineColorAndroid={"#D3D3D3"} 
			placeholder="Description de la tâches:" 
			onChangeText= {taskDescription => settaskDescription(taskDescription)} 
			>
			</TextInput >
			<TouchableOpacity style={{height:30,width:100,borderColor:BLUE,borderWidth:2,borderRadius:50,justifyContent:"center"}}
				onPress={()=>addItem()}>
				<Text> Créer la tâche</Text>
			</TouchableOpacity>
		</View>
	</Modal>
    <View style={{ flex: 1, marginTop:50}}>
      <View style={{flexDirection:"row"  }}>
        <SearchBar/>
      </View>
      <View>
        <Text style={ styles.title }> Tâche à faire:</Text>
      </View>
			{tasks.length ? (
        <ScrollView>
          <View>
            {tasks.map((element,index) => {
							console.log("element: "+element.name,index)
              return <Tasks  deleteitem={deleteItem(index)} key={element.id} text={element.name}  />;
            })}
          </View>
        </ScrollView>
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>Aucune Tâches</Text>
          </View>
        )}
        <View style={{ marginTop:15 }}>
        </View>
        <ScrollView style={{ position:"absolute",bottom:0,right:0,marginBottom:30,marginRight:25}}>
        <Buttons press={handlebutton}></Buttons>
        </ScrollView>
    </View>

</View>
    
  );
}
