import React, {Component} from 'react'

class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();  //preventing the default behavior of the submit form function, which is refreshing the page.
        const imageLink = event.target.elements.link.value //the vlaue we put inside the link field in the form.
        const imageDescription = event.target.elements.description.value ////the vlaue we put inside the description field in the form.
        const post = {
            id: (Number)(new Date()),
            imageLink: imageLink,
            description: imageDescription
        }
        if(imageLink && imageDescription){ //If they aren't null
            this.props.startAddingPost(post)
            this.props.history.push('/')     //redirects us to the main page
        }

    }

    render(){
        return (
            <div>
                <div className='new-photo-title'>
                    <h2> Add your own photo! </h2>
                </div>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='Link' name='link'/>
                        <input type="text" placeholder='Description' name='description'/>
                        <button> Post! </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto