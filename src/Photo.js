import propTypes from 'prop-types'
import {Link, link} from 'react-router-dom'


function Photo(props){
    const post = props.post;
    return <figure className = 'figure'>
                <Link to = {`/single/${post.id}`}> <img src = {post.imageLink} className='photo' alt={post.description}/> </Link>  
                <figcaption> <p> {post.description} </p> </figcaption>
                <button className= 'button-container' onClick={ () => {
                     props.startRemovingPost(post.id) 
                     props.history.push('/')}}> Remove </button>
                <Link to = {`/single/${post.id}`} className='button'>
                    <div className='comment-count'>
                        <div className='speech-bubble'></div>
                        {
                        props.comments[post.id] ? props.comments[post.id].length : 0
                        //if the comments array isn't empty return its length, otherwise return 0
                        }
                    </div>
                </Link>
            </figure>
}


Photo.prototypes = {
    post: propTypes.object.isRequired,
}

export default Photo