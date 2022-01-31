/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import { StatusBar,View,Text ,FlatList,TouchableOpacity} from 'react-native';
import {NotesContext} from '../context/NotesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const ListNotesScreen = ({navigation})=>{
    const {state,dispatch} = useContext(NotesContext);
    return (
        <View style={styles.backgroundColor}>
              <StatusBar  
                    backgroundColor = "#801336"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
            
            <FlatList
            data={state}
            keyExtractor={item=>item.title}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity style={{marginTop:20}} 
                    onPress={()=>navigation.navigate("show",{id:item.id})}>
                   <View style={styles.list}>
                        <Text style={{fontSize:16,color:"#FFF"}}>{item.title}</Text>
                    <Icon name="delete" size={25} color="white"
                    onPress={()=>dispatch({type:'REMOVE',payload:item.id})}/>
                   </View>
                   </TouchableOpacity>
                );
            }}
            />
            <View style={{alignItems:'center',justifyContent:"flex-end",flexDirection:"row"}}>
            <TouchableOpacity
                style={styles.add}
                onPress={()=>navigation.navigate('create')}>
                     <Icon name="add" size={25} color="white" />
            </TouchableOpacity>
            </View>
        </View>
    );

};
export default ListNotesScreen;
