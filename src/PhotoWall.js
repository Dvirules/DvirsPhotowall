
import Photo from './Photo'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
 
function PhotoWall(props){
      
    return <div>
                <Link className='addIcon' to ="/AddPhoto"></Link>
                {/*<a className='addIcon' onClick={ () => {props.onChangePage()}} href='#AddPhoto' > </a>}   Can be done via a anchor <a> tag too, however it will not be in sync with the router-browser this way.
                /* <button className='addIcon' onClick={ () => {props.onChangePage()} }>  </button>   Can be done via a button too, only that this way it will not be able to affect the URL */  }
                    <div className='photoGrid'>
                        {props.posts.sort(function(x,y){
                            return y.id - x.id  //sorts the array of posts in a descending id order (new to old)
                        }).map((item, index) =>
                            <Photo key={item.id} post = {item} {...props}/>)};
                    </div>
            </div>     
}

PhotoWall.propTypes = {
    posts: propTypes.array.isRequired,
    /*
   // onRemovePhoto: propTypes.func.isRequired, //IRELLEVANT AFTER IMPLEMENTING REACT-Redux Binding (LECTURE 48)!
  //  onChangePage: propTypes.func.isRequired //IRELLEVANT AFTER IMPLEMENTING REACT-Redux Binding (LECTURE 48)!
  */
}

export default PhotoWall