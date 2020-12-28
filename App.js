import { StatusBar } from 'expo-status-bar';
import { Provider } from "mobx-react";
import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FinishTaskScreen from './FinishTaskScreen';
import {ListStore} from './TaskStore'
import Loader from './loading'
import { FontAwesome } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{ backgroundColor:"#4A6572" }}{...props}>
			<View style={{ height:150,justifyContent:"center", alignItems:"center"}}>
			<FontAwesome name="tasks" size={70} color="#F9AA33" />
</View>
      <DrawerItemList  {...props} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
	const [isLoading, setisLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setisLoading(false);
		}, 1000);
	});
	const stores={ListStore}

  return (
		<Provider {...stores}>
    <NavigationContainer style={{}}>
		{isLoading ? (
			<Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}>
			<Drawer.Screen name="loading" component={Loader} />
			</Drawer.Navigator>
			):(
				<Drawer.Navigator drawerStyle={{
					width: 240,
				}} drawerContentOptions={{
					activeTintColor: '#f9aa33',
					inactiveTintColor:"lightgrey",
					color:"white"
				}} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen  options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
						<FontAwesome name="tasks" size={20} color="#F9AA33" />
          ),
        }} style={{color:"#f9aa33"}} name="Home" component={HomeScreen} />
			<Drawer.Screen options={{
          title: 'Tâches finis',
          drawerIcon: ({focused, size}) => (
<MaterialCommunityIcons name="checkbox-marked-circle" size={20} color="#F9AA33" />          ),
        }} name="FinishTask" component={FinishTaskScreen} />
			</Drawer.Navigator>
			)}
  </NavigationContainer>
	</Provider>
  );
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',		
  },
  
  text:{
width:250
  },
  TextInput:{
    
    justifyContent:"space-between",
    flexDirection:"row",
    height:30,
    width:300,
    borderWidth: 1,
    borderStyle:"solid",
    borderColor:"black",
    borderRadius:0,
    color:"black",
    backgroundColor:"white",
    
  },
  button:{
    backgroundColor:"green"
  },
  Boxbutton:{
    height:30,
    backgroundColor:"green",
    flexDirection:"row-reverse",
    color:"green"
  }
});
