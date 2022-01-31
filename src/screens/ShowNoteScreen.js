/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, Text,StatusBar} from 'react-native';
import {NotesContext} from '../context/NotesContext';
import { styles } from './styles';

const ShowNoteScreen = ({route}) => {
    const {id} = route.params
    const {state} = useContext(NotesContext)
    const note = state.find((record)=>{
        return record.id == id
    })
  return( 
  <View style={styles.backgroundColor}>
    <StatusBar  
                    backgroundColor = "#801336"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  

<View style={styles.tasks}>
<Text style={styles.mytext}>Task title : </Text>
<Text style={styles.mytext}>{note.title}</Text>
</View>

<View style={styles.tasks}>
<Text style={styles.mytext}>Task details : </Text>
<Text style={styles.mytext}>{note.content}</Text>
</View>

  </View>
  )
};
 
export default ShowNoteScreen
