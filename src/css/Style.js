import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    task:{
			backgroundColor:"white",
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			width:"100%",
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			borderRadius:5,
			elevation: 6,
			marginBottom:5,
      height:50,
			flexDirection:"row",
    },
    TextTasks:{
			fontSize:20
    },
    priority:{
      backgroundColor:"blue",
      width:15,
      height:15,
      alignSelf: 'center',
      borderRadius:50,
      marginRight:30

    },
checkboxContainer: {
	flexDirection: "row",
	marginBottom: 20,
},
checkbox: {
	alignSelf: "center",
},
  });
  export default styles;