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
import Task from './HomeScreenComponent/Task';
import { MaterialIcons } from '@expo/vector-icons'; 


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
  const [list, setList] = useState([]);
	const [taskName,settaskName] = useState("");
	const [taskDescription, settaskDescription] = useState("");
	const [taskPriority, settaskPriority] = useState("");
	const [taskstatus, settaskstatus] = useState("en cours");
	const [isChecked, setisChecked] = useState(true);

	const [showModal, setShowModal] = useState(false);

  const addItem = () => {

	 var obj={taskName,taskDescription,taskPriority,taskstatus,isChecked};
    const tmp = [...list,obj];
		setList(tmp);
		settaskName('');
		settaskDescription('')
		console.log(list)
	};
	const handlefocus = (event) =>{
		setisFocused({isFocused:true})
		if(props.onFocus){
			props.onFocus(event);
	}
}
const deleteItem = (index) => {
	const tmp = [...list];
	tmp.splice(index, 1);
	setList(tmp);
};
const handlePriority=()=>{

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
				onChangeText={taskName=>settaskName(taskName)} 
				>
			</TextInput>
			<TextInput   
			style={{height: 40,width:300}}
			value={taskDescription}
			selectionColor={isFocused ? BLUE : LIGHT_GREY} 
			underlineColorAndroid={"#D3D3D3"} 
			placeholder="Description de la tâches:" 
			onChangeText= {taskDescription=>settaskDescription(taskDescription)} 
			>
			</TextInput>
					<Text>Priorité:</Text>
				<View style={{flex:1,flexDirection:"row"}}>
			<TouchableOpacity  onPress={()=>settaskPriority("faible")}>
			<MaterialIcons name="flag" size={36} color="blue" />
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>settaskPriority("moyen")} >
			<MaterialIcons name="flag" size={36} color="orange" />
					</TouchableOpacity>
					<TouchableOpacity  onPress={()=>settaskPriority("haute")} >
			<MaterialIcons name="flag" size={36} color="red" />
					</TouchableOpacity >
					</View>
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
			{list.length ? (
        <ScrollView>
          <View>
					{list.map((item,index) => (
						<View>
							{console.log(item)}
      <Task ischecked={isChecked}  setischecked={()=>setisChecked(!!isChecked)} ondelete={()=>deleteItem(index)} key={index} text={item.taskName}></Task>
				</View>
    ))}
      
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
