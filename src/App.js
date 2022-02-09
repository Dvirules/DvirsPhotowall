import {connect} from "react-redux";
import Main from "./Main";
import {bindActionCreators, BindActionCreators} from 'redux'
import * as actions from './Redux/actions'  //importing everyhting from actions.js
import {withRouter} from 'react-router'

function mapStateToProps(state){
    return {
        posts: state.posts,  //the state returned from the posts reducer function 
        comments: state.comments  //the state returned from the comments reducer function 
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))   /*Doesn't actually modify the Main component, instead it returns a new 
connected component (which is the Main component connected to the state and the actions methods as props, thus connected to the store) - App.*/

export default App