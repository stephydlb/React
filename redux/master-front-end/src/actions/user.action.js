import axios from "axios";


export const GET_USER = "GET_USER";

export const getUser = () => {
    return (dispatch) => { 
        return axios.get("http://localhost:3000/user").then((res) => {    //communique avec la db et récupère les données
            dispatch({ type: GET_USER, payload: res.data });             // dispatch est une fonction qui permet de dispatcher les actions vers le store (redux) et les afficher directement dans le store
        });
    };  
 };
