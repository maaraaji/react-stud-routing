import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axios from '../../axios';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }
  componentDidMount () {
    axios.get('/posts').then ( response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map ( post => {
        return {
          ...post,
          Author : 'Maanikkam'
        }
      });
      // console.log(updatedPosts);
      this.setState({
        posts: updatedPosts
      })
    }).catch (error => {
      console.log("Local error handler");
      this.setState({
        error: true
      })
    });
  };

  showSelectedPostHandler = (id) => {
    this.setState({selectedPostId : id})
  }

  render () {
    let posts = <p>Something went wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map( post => {
        return <Post key={post.id} title={post.title} author={post.Author} clicked={ () =>this.showSelectedPostHandler(post.id)}/>
      });
    };
    // console.log(posts);
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/new-post'>New Post</a></li>
            </ul>
          </nav>
        </header>
        <section className="Posts">
            {posts}
        </section>
      </div>
    );
  }
}

export default Blog;
