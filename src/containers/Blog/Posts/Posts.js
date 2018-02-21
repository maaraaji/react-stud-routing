import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
class Posts extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount () {
    console.log('[Posts.js] componentDidMount()')
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
    // this.setState({selectedPostId : id})
    console.log(this.props.match.url + id);
    this.props.history.push({pathname: this.props.match.url + '/' + id});
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    let posts = <p>Something went wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map( post => {
        return (
            // <Link to={'/'+post.id} key={post.id}>
            <Post key={post.id} title={post.title} author={post.Author} clicked={ () =>this.showSelectedPostHandler(post.id)}/>
            // </Link>


        )
      });
    };
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>
    )
  };
}

export default Posts
