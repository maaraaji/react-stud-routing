import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';
class Posts extends Component {

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
      console.log(updatedPosts);
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

  render() {
    let posts = <p>Something went wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map( post => {
        return <Link to={'/post/'+post.id} key={post.id}><Post title={post.title} author={post.Author} clicked={ () =>this.showSelectedPostHandler(post.id)}/></Link>
      });
    };
    return (
      <section className="Posts">
          {posts}
      </section>
    );
  };
}

export default Posts
