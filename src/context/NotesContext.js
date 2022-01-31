/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {createContext, useReducer } from 'react';
import { reducer as NotesReducer,initalState } from '../reducer/NotesReducer';
export const NotesContext = createContext();

export const NotesProvider = ({children})=>{
    const [state,dispatch] = useReducer(NotesReducer,initalState);

return (
    <NotesContext.Provider value={{state,dispatch}}>
        {children}
    </NotesContext.Provider>
);
};
