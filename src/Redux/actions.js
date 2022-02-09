import * as firebase from 'firebase'


//updating Firebase's POSTS node database
export function startAddingPost(post){ //                                  the promise - the async method
    return (dispatch) => {         //                                      |
        return firebase.database().ref('posts').update({[post.id]: post}).then( () => {dispatch(addPost(post))}) //upon a SUCCESSFUL return of the promise, invoke the action addPost to update the UI 
        //                                  |              \
    } //                           the node on firebase      updating with kew-value pairs
}

//fetching data from firebase's POSTS node database
export function startLoadingPost(){
    return (dispatch) => {
        //                                 observes the value of 'posts' node on firebase
        //                                       |
        return firebase.database().ref('posts').once('value').then((postsArr) => {
            let postsFromFireBase = []
            postsArr.forEach((aPost) => {postsFromFireBase.push(aPost.val())})  //inserting all of the VALUES (the photo objects) of from the node of posts to a new array
            dispatch(loadPosts(postsFromFireBase)) //dispatching the load posts action
        })
    }
}

//removing data from firebase's POSTS node database
export function startRemovingPost(id){
        return (dispatch) => {
             firebase.database().ref(`comments/${id}`).remove()                //     removing the post 
             return firebase.database().ref(`posts/${id}`).remove().then(() => {dispatch(removePost(id))})    //removing its comments node too, and calling the removePost action to rerender the UI
        }
}

//updating Firebase's COMMENTS node database
export function startAddingComment(comment, postId){ //                     the promise - the async method
    return (dispatch) => {         //                                       |
        return firebase.database().ref(`comments/${postId}`).push({comment}).then( () => {dispatch(addComment(comment, postId))}) //upon a SUCCESSFUL return of the promise, invoke the action addComment to update the UI 
        //                                  |                        \
    } //                           the node on firebase            adding the comment to the array
}

//fetching data from firebase's COMMENTS node database
export function startLoadingComment(){
    return (dispatch) => {
        //                                 observes the value of 'comments' node on firebase
        //                                         |
        return firebase.database().ref('comments').once('value').then((comemntsObj) => {
            let commentsFromFireBase = {}  //              the key from the database   extracts just the VALUES
            comemntsObj.forEach((anObj) => {commentsFromFireBase[anObj.key] = Object.values(anObj.val())})  //inserting all of the VALUES (the pairs of id and comments for each post) from the node of comments to a new object
            dispatch(loadComments(commentsFromFireBase)) //dispatching the load comments action
        })
    }
}

//Remove photo action
export function removePost(index){    //the action creator
    return {
        type: "REMOVE_POST", //the action (object)
        index: index
    }
}

//Add photo action
export function addPost(post){    //the action creator
    return {
        type: "ADD_POST", //the action (object)
        post       // The ES6 equal of writing post:post
    }
}


//Add comment action
export function addComment(comment, postId){    //the action creator
    return {
        type: "ADD_COMMENT", //the action (object)
        comment,
        postId
    }
}

//the action sent to the reducer of Loading the posts from the firebase
export function loadPosts(posts){
    return{
        type: "LOAD_POSTS",
        posts
    }
}

//the action sent to the reducer of Loading the comments from the firebase
export function loadComments(comments){
    return{
        type: "LOAD_COMMENTS",
        comments
    }
}
