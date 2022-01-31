/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListNotesScreen from './src/screens/ListNotesScreen';
import { NotesProvider } from './src/context/NotesContext';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import ShowNoteScreen from './src/screens/ShowNoteScreen';
const Stack = createStackNavigator();

 function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="notes"
        component={ListNotesScreen }
        options={{
          headerTitleAlign:"center",
          title:"All Tasks",
          headerStyle: {
            backgroundColor:"#510A32"
          },
          headerTitleStyle: {
            color:"#FFF"
          },
          headerTintColor: '#fff',
        }}/>
         <Stack.Screen name="create"
        component={CreateNoteScreen}
        options={{
          headerTitleAlign:"center",
          title:"Create Task",
          headerStyle: {
            backgroundColor:"#510A32"
          },
          headerTitleStyle: {
            color:"#FFF",
          },
          headerTintColor: '#fff',
        }}/>
          <Stack.Screen name="show"
        component={ShowNoteScreen}
        options={{
          headerTitleAlign:"center",
          title:"Task details",
          headerStyle: {
            backgroundColor:"#510A32"
          },
          headerTitleStyle: {
            color:"#FFF"
          },
          headerTintColor: '#fff',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ()=>{
  return(
    <NotesProvider>
          <App/>
    </NotesProvider>
  );
};
