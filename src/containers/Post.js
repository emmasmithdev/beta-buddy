import React, {Component, Fragment} from 'react';
import CommentList from '../components/CommentList.js';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      comments: [],
      buttonClick: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  componentDidMount(){
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users?id=${this.props.post.userId}`)
      .then(res => res.json())

    const commentsPromise = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`)
      .then(res => res.json())

    Promise.all([userPromise, commentsPromise])
      .then((data) => {
        this.setState({
          user: data[0][0],
          comments: data[1]
        })
      })
      .catch(err => console.error);
  }

  handleClick(event) {
   this.setState(state => ({
     buttonClick: !state.buttonClick
   }));
 }

 showComments(){
   if (this.state.buttonClick ){
     return <CommentList comments={this.state.comments}/>
   }
 }

  render(){
    return (
      <Fragment>
        <p className="postTitle">{this.props.post.title}</p>
          <p className="userName">{this.state.user.name}</p>
        <p className="postBody">{this.props.post.body}</p>
        <button onClick={this.handleClick}>{this.state.buttonClick ? 'Hide Comments' : 'Show Comments'}</button>
        {this.showComments()}
      </Fragment>
    )
  }

}
export default Post;
