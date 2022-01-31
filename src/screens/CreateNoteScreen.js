/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */

import React,{useState,useContext} from 'react';
import { StyleSheet,View,Text ,StatusBar,TouchableOpacity,TextInput} from 'react-native';
import {NotesContext} from '../context/NotesContext';
import { styles } from './styles';
const CreateNotesScreen = ({navigation}) =>{

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const {state,dispatch} = useContext(NotesContext);

    return (
        <View style={styles.backgroundColor}>
            <StatusBar  
                    backgroundColor = "#801336"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
            
            <View style={{marginTop:20}}>
            <TextInput style={styles.input}
            value={title}
            placeholder='Enter task title'
            onChangeText={(text)=>setTitle(text)}/>

            <TextInput style={styles.input}
            value={content}
            placeholder='Enter task details'
            onChangeText={(text)=>setContent(text)}
            numberOfLines={3}
            multiline={true}/>

            <TouchableOpacity
            style={styles.save}
            onPress={()=>{
                dispatch({type:"ADD",payload:{title,content}});
                navigation.goBack();
            }}>
                <Text style={{fontSize:20,color:"#FFF",textAlign:"center",fontWeight:"bold"}}>Save</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};
export default CreateNotesScreen;
