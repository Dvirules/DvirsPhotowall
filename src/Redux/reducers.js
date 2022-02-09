import * as firebase from 'firebase'
import { combineReducers } from "redux"

//The reducer of the array of posts ("posts")
function posts(state = [] /*the state of the app, initially gets the value of the an empty array*/, 
    action /*whatever happened that changed the state*/){

    switch(action.type){
        case "REMOVE_POST": return state.filter(post => post.id != action.index)
        case "ADD_POST": return [...state, action.post]
        case "LOAD_POSTS": return action.posts
        default: return state                   //returning an updated state invokes rerendering!
    }
}

//The reducer of the arrays of comments ("comments")
function comments(state = {}, action){
    switch(action.type){
        case "ADD_COMMENT":
        if(action.comment){ //if the comment isn't empty
            if(!state[action.postId]) //if the object inside the oject state ('comments') in the place of the post's id is empty(undefined)
                return {...state, [action.postId]: [action.comment]} //then populate it, by creating the first object with the (post's id): (the first array of comments on that post) pair, and return it
                     // the first [] is because that it's how ES6 allows creation of a new pair inside an object, the second [] is because we want an array of comments
            else
                return {...state, [action.postId]: [...state[action.postId], action.comment]} //otherwise, update the value of the key (post's id) with its previous value (the already created comments) + the new comment, and return it
        }

        case "LOAD_COMMENTS": return action.comments

        default: return state
    }

}

const rootReducer = combineReducers({posts, comments}) //because the rule is you can only return ONE reducer to the setStore method, we combine bith reducers methods to a single const

export default rootReducer