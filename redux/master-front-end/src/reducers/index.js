import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import postReducer from './post.Reducer'

export default combineReducers ({
    userReducer,
    postReducer
});

// In your root reducer, import all your reducers and combine them into one root reducer.