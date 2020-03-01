import React, {Component, Fragment} from 'react';
import PostList from '../components/PostList.js';

class PostContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      search: ""
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
      .catch(err => console.error);
  }

  updateSearch(event){
    this.setState({
      search: event.target.value.substr(0, 20)
    })
  }

  render(){

    const recentPosts = this.state.posts.filter((post, index) => {
      return index >= this.state.posts.length - 50;
    })

    let filteredPosts = recentPosts.filter((post) => {
      return (post.title.indexOf(this.state.search) !== -1) || (post.body.indexOf(this.state.search) !== -1)
    })

    const posts = this.state.search == "" || filteredPosts.length < 1 ? recentPosts : filteredPosts;

    return(
      <Fragment>
      <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search for keywords"/>
      <div className="postList">
        <PostList posts={posts} />
      </div>
      </Fragment>
    )
  }

}
export default PostContainer;
