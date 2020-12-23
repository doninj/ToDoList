import { StyleSheet} from 'react-native';
import { withTheme } from 'react-native-elements';


const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    task:{
      borderBottomWidth:2,
      borderBottomColor:"grey",
      height:50,
			flexDirection:"row",
			marginRight:10,
			marginLeft:10
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
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: .5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5 ,
      elevation:10,
      margin: 10
  },
  SectionStyleAdd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 20 ,
    margin: 10,
    elevation:6,
    shadowColor:"black"
},
checkboxContainer: {
	flexDirection: "row",
	marginBottom: 20,
},
checkbox: {
	alignSelf: "center",
},
  
  ImageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center'
  },
  title:{
    fontSize:35,
	},

  
  });
  export default styles;