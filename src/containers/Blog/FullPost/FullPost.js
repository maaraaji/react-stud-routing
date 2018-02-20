import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {

  state = {
    loadedPost: null
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate()")
    if (this.props.id) {
      if (!this.state.loadedPost || (this.state.loadedPost.id !== this.props.id)){
        axios.get("/posts/"+this.props.id).then (response => {
          console.log(response);
          this.setState({
            loadedPost: response.data
          });
          console.log("StateUpdated")
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/"+this.props.id).then (response => {
      console.log(response);
    });
  }

  render () {
    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    if (this.props.id){
      post = <p style={{textAlign: 'center'}}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      if (this.state.loadedPost.id !== this.props.id){
        post = <p style={{textAlign: 'center'}}>Loading...</p>;
      } else {
        post = (
          <div className="FullPost">
              <h1>{this.state.loadedPost.title}</h1>
              <p>{this.state.loadedPost.body}</p>
              <div className="Edit">
                  <button onClick={this.deletePostHandler} className="Delete">Delete</button>
              </div>
          </div>
        );
      }
    }
    return post;
  }
}

export default FullPost;
