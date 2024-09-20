import { GET_POST } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {                      // action.type est une propriété de l'objet action il permet de déterminer quel type d'action est effectuée.
        case GET_POST:                       // action.payload est une propriété de l'objet action il permet de récupérer les données de l'action.
            return {                          // ici on retourne un nouvel objet qui contient les données de l'action.
                state,
                posts: action.payload 
            };
        default:                            // ici on retourne l'état par defaut de l'application.
            return state;
    }
}