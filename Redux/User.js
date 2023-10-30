import { configureStore, createSlice } from "@reduxjs/toolkit";

// Permet de stocker l'utilisateur dans le store
export const user = createSlice({
    name:'user', 
    initialState:null,
    reducers:{
        setUser: (state,action) => {
            return action.payload
        },
        resetUser: (state,action) => {
            return null
        }
    } 
});

// On récupère setUser pour le mettre dans le store
export const {setUser, resetUser} = user.actions;

// On rend disponible le state
export default user.reducer;