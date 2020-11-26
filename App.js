import { StatusBar } from 'expo-status-bar';
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


const Stack = createStackNavigator();

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer style={{}}>
    <MyDrawer />
  </NavigationContainer>
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
