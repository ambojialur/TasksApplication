/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    input:{
        fontSize:16,
        marginVertical:8,
        backgroundColor:"#EE4540",
        borderRadius:10,
        margin:10
    },
   add:{
    marginVertical:10,
    marginRight:20,
    marginBottom:20,
    backgroundColor:'#C92A42',
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center'
},
list:{
    flexDirection:'row',
justifyContent:'space-between',
marginHorizontal:10,
padding:10,
elavation:4,
backgroundColor:'#EE4540',
borderRadius:10
},

save:{
    marginTop:30,
    backgroundColor:"#C92A42",
    padding:12,
    marginHorizontal:60,
    borderRadius:10
},
backgroundColor:{
    flex:1,
    backgroundColor:"#2D142C"
},
tasks:{
    backgroundColor:"#EE4540",
    borderRadius:10,
    marginTop:10,
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row",
    margin:10,
},
mytext:{
    fontSize:16,
    textAlign:'center',
    paddingVertical:20,
    color:"#FFF"
},
});

export { styles }