import react, {Component} from 'react'

class Comments extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        const theComment = event.target.elements.comment.value
        this.props.onComment(theComment, this.props.id)
        event.target.elements.comment.value = ''
        document.location.reload()
    }

    render(){
        return (<div className='comment'>
                {
                    this.props.specificPostComments.map((comment1, index) => {
                        console.log(comment1.comment);
                       return <p className='paragraph' key = {index}> {comment1.comment} </p>
                    })
                }
                    <form className='comment-form' onSubmit={this.handleSubmit}>
                        <input className='paragraph' type = "text" placeholder = "Add your comment!" name = 'comment'/>
                        <input className='paragraph' type = "submit"/>
                    </form>

              </div>)
    }
}

export default Comments