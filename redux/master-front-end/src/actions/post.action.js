import axios from "axios";


export const GET_POST = "GET_POST";

export const getPosts = () => {
    return (dispatch) => { 
        return axios.get("http://localhost:3000/posts").then((res) => { //communique avec la db et récupère les données
            dispatch({ type: GET_POST, payload: res.data }); // dispatch est une fonction qui permet de dispatcher les actions vers le store (redux) et les afficher directement dans le store
        });
    };  
 };
