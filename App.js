import { StatusBar } from 'expo-status-bar';
import { Provider } from "mobx-react";
import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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



const Stack = createStackNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="FinishTask" component={FinishTaskScreen} />

    </Drawer.Navigator>
  );
}
export default function App() {
	const stores={ListStore}

  return (
		<Provider {...stores}>
    <NavigationContainer style={{}}>
    <MyDrawer />
  </NavigationContainer>
	</Provider>
  );
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"lightgrey",
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
