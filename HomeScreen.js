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
import Task from './HomeScreenComponent/Task';

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
	const [showModal, setShowModal] = useState(false);

  const addItem = () => {

		
    const tmp = [...list];
    tmp.push(taskName);
		setList(tmp);
		settaskName('');
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
				onChangeText={taskName=>settaskName(taskName)} >
			</TextInput >

			<TextInput   
			style={{height: 40,width:300}}
			value={taskDescription}
			selectionColor={isFocused ? BLUE : LIGHT_GREY} 
			underlineColorAndroid={"#D3D3D3"} 
			placeholder="Description de la tâches:" 
			onChangeText= {taskDescription=>settaskDescription(taskDescription)} 
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
			{list.length ? (
        <ScrollView>
          <View>
					{list.map((item,index) => (
					
						<View>
							{console.log(item)}
      <Text key={index} >{item}</Text>
			<TouchableOpacity onPress={() => deleteItem(index)}>
          <Text style={{ color: 'red' }}>Supprimer</Text>
        </TouchableOpacity>
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

