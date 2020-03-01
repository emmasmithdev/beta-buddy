import React, {Component, Fragment} from 'react';
import PostList from '../components/PostList.js';

class PostContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
      .catch(err => console.error);
  }

  render(){

    const recentPosts = this.state.posts.filter((post, index) => {
      return index >= this.state.posts.length - 50;
    })

    return(
      <div className="postList">
        <PostList posts={recentPosts} />
      </div>
    )
  }

}
export default PostContainer;
