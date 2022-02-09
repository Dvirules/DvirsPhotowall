import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Link, Route} from 'react-router-dom'
import {removePost} from './Redux/actions'
import Single from './Single'


class Main extends Component{

    state = {loading: true}

    componentDidMount(){
        this.props.startLoadingPost().then(() => {this.setState({loading: false})})
        this.props.startLoadingComment()
    }
    
//     constructor(){ //IRRELEVANT AFTER LECTURE 64
//         super()
        
//         this.state = {

//             screen: "photos"  determinig the screen (page) to show. Either photos or addPhoto. IRELLEVANT AFTER IMPLEMENTING REACT-ROUTER (LECTURE 34)!
//     }
   
// }
//     this.removePhoto = this.removePhoto.bind(this);  //IRELLEVANT AFTER IMPLEMENTING REACT-Redux Binding (LECTURE 48)!
//     this.changePage = this.changePage.bind(this);   //IRELLEVANT AFTER IMPLEMENTING REACT-ROUTER (LECTURE 34)!
//     this.addPhoto = this.addPhoto.bind(this);       //IRELLEVANT AFTER IMPLEMENTING REACT-Redux Binding (LECTURE 48)!
// }

// changePage(){   //IRELLEVANT AFTER IMPLEMENTING REACT-ROUTER (LECTURE 34)!
//     this.setState({
//         screen: "addPhoto"
//     })
// }

// addPhoto(postSubmitted){             //IRELLEVANT AFTER IMPLEMENTING REACT-Redux Binding (LECTURE 48)!
//     this.setState((state) => ({
//         posts: state.posts.concat([postSubmitted])
//     }))
// }

// removePhoto(postRemoved){             //IRELLEVANT AFTER IMPLEMENTING REACT-Redux Binding (LECTURE 48)!
//     console.log(postRemoved.description);
//     this.setState((state) => ({
//         posts: state.posts.filter(post => post !== postRemoved)
//     }))
// }


    render(){
        return (
            <div> 

                 <div className="theTitle">
                    <h1>
                         <Link className='linkAsH1' to = '/'> Photowall. </Link> 
                    </h1>
                </div>
            
            <switch>
           <Route exact path = '/' render = { () => (
               <div>     
               <PhotoWall {...this.props}/> {/*passing in all of the props we have in Main
                                  (which are the store as the array of posts, and the dispatch removePost method)
                                    to PhotoWall via the '...' es6 spread operator*/}
               {/* <PhotoWall gallery = {this.state.posts} onRemovePhoto = {this.removePhoto} onChangePage = {this.changePage}/> //IRELLEVANT AFTER IMPLEMENTING REACT-Redux Binding (LECTURE 48)! */}
               </div>
           )}/>


            <Route path = "/AddPhoto" render = {({history}) => (
                    <AddPhoto {...this.props}/>
            )}/>


            <Route path = "/single/:id" render={ (params) => (
                    <Single loader = {this.state.loading} {...this.props} {...params}/>
            )}/>
            </switch>

           </div> 
        )
    }

}    

export default Main