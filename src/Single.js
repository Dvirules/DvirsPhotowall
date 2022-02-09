import react from "react";
import {Component} from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component{

    render(){
        //  the clicked post   the store (array of all the posts)        looking for the specific post by id
        const theSinglePost = this.props.posts.find( (obj) => obj.id === (Number)(this.props.match.params.id) )

        if(this.props.loader)
        return <div className="loader"> loading... </div>
        else if (theSinglePost){  //if there is a post (isn't undefined)
        return (
            <div className="single-photo">
                <Photo post = {theSinglePost} {...this.props}/>
                <Comments onComment = {this.props.startAddingComment} specificPostComments = {this.props.comments[theSinglePost.id] || []} id = {theSinglePost.id}/>
            </div> )                                           //setting the value to the specific post's comment OR, if it's undefined (there are no comments - the beginnig) then set it to an empty array
        }
        else return <h1> This post has been deleted </h1>
    }

}

export default Single