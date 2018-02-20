import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

  render () {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to={{
                  pathname: '/new-post',
                  hash: '#second',
                  search: '?quick-submit=true'
                }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        {/*<Route path='/' exact render={() => <Posts />}/> Not Recommended
        <Route path='/new-post' exact render={() => <h1>Dummy</h1>}/>
        <Route path='/' exact component={() => {<Posts/>}}/>*/}
        <Route path='/' exact component={Posts}/>
        <Route path='/new-post' exact component={NewPost}/>
      </div>
    );
  }
}

export default Blog;
