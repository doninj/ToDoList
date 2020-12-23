import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView,KeyboardAvoidingView, KeyboardAvoidView,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import Modal from 'react-native-modal';
import SearchBar from './HomeScreenComponent/SearchBar';
import styles from './Style';
import Task from './HomeScreenComponent/Task';
import { MaterialIcons } from '@expo/vector-icons'; 
import ModalPerso from './Modal'
import { add } from 'react-native-reanimated';
import {ListStore} from './TaskStore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListRounded } from '@material-ui/icons';

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

export default function HommeScreen({navigation:{navigate}}) {
  const [list, setList] = useState([]);
	const [taskName,settaskName] = useState("");
	const [taskDescription, settaskDescription] = useState("");
	const [taskPriority, settaskPriority] = useState("0");
	const [taskstatus, settaskstatus] = useState("en cours");
	const [ischecked, setischecked] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const inputRef = React.useRef()
	const [Refresh, setRefresh] = useState(false);
	const [search, setsearch] = useState("");

	const getData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('name')
			console.log(jsonValue);
			return jsonValue != null ? ListStore.list=JSON.parse(jsonValue) : null;
		} catch(e) {
			// error reading value
		}
	}
	
	React.useEffect(() => {

    setTimeout(() => {
			setRefresh(!Refresh);
    }, 1000);
  }, [Refresh]);

	React.useEffect(() => {
			getData()
  }, []);


  async function add() {
		ListStore.addTodo(taskName,taskDescription,taskPriority,taskstatus)
		var obj=ListStore.getList
		const tmp = [...list,obj];
		setList(tmp);
		settaskName('')
		settaskPriority('')
		settaskDescription('')
		storeData()
	}
	const storeData = async () => {
		try {
			await AsyncStorage.setItem('name', JSON.stringify(ListStore.list))
			console.log("mis en sauvegarde")
		} catch (e) {
			console.log(ListStore.list)
	console.log(e)  }
	}
	function deletetask(todo) {
		ListStore.removeTodo(todo)
		var obj=ListStore.getList
		const tmp = [...list,obj];
		setList(tmp);
		storeData()
	}
	function completed(todo){
		ListStore.toggleTodo(todo)
		setischecked(!ischecked)
		console.log(ListStore.list)
		storeData()
	}
	const handlebutton=()=>{
		setShowModal(!showModal);
}

function compare( a, b ) {
  if ( a.priorite < b.priorite ){
    return 1;
  }
  if ( a.priorite > b.priorite ){
    return -1;
  }
  return 0;
}

  return (
<View 
			style={{ flex:1 }}>
<ModalPerso  showModal={showModal} handlebutton={handlebutton}   taskName={taskName} settaskName={settaskName} taskDescription={taskDescription} settaskDescription={settaskDescription} settaskPriority={settaskPriority} addItem={add}  ></ModalPerso>
    <View style={{ flex: 1, marginTop:50}}>
      <View style={{flexDirection:"row"}}>
        <SearchBar settext={search=>setsearch(search)}/>
      </View>
      <View>
        <Text style={ styles.title }> Tâche à faire:</Text>
      </View>
			{ListStore.list.length ? (
        <ScrollView>
          <View>
					{ListStore.list.filter(t=>t.completed==false && t.title.includes(search)).sort(compare).map((todo,index)=>{
    					return <Task key={index}  ondelete={()=>deletetask(todo)} completed={()=>completed(todo)} taskcompleted={todo.completed.toString()}  priority={todo.priorite} description={todo.description} text={todo.title}></Task>	
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

