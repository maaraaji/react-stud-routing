import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {

  state = {
    loadedPost: null
  }

  componentDidMount() {
    console.log("ComponentDidMount()")
    this.loadData();
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate()")
    this.loadData();
  }

  loadData () {
    if (this.props.match.params.id) {
      if (!this.state.loadedPost || (this.state.loadedPost.id !== +this.props.match.params.id)){
        axios.get("/posts/"+this.props.match.params.id).then (response => {
          console.log(response);
          this.setState({
            loadedPost: response.data
          });
          console.log(this.state.loadedPost);
          console.log("StateUpdated");
        });
      }
    }
  };

  deletePostHandler = () => {
    axios.delete("/posts/"+this.props.match.params.id).then (response => {
      console.log(response);
    });
  }

  render () {
    let post = <div className="FullPost"><p style={{textAlign: 'center'}}>Please select a Post!</p></div>;
    if (this.props.match.params.id ){
      post = <div className="FullPost"><p style={{textAlign: 'center'}}>Loading...</p></div>;
    }
    if (this.state.loadedPost) {
      if (this.state.loadedPost.id !== +this.props.match.params.id) {
        post = <div className="FullPost"><p style={{textAlign: 'center'}}>Loading...</p></div>;
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
      console.log('[FullPost.js] In render ' + this.props.match.params.id + ' ' + this.state.loadedPost.id)
    }
    return post;
  }
}

export default FullPost;
