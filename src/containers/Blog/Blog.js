import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {

  render () {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to='/posts' exact>Home</NavLink></li>
              {/*<li><NavLink to='/' exact activeStyle={{color: 'white', backgroundColor: 'black', textDecoration: 'underline'}}>Home</NavLink></li>
              <li><Link to={{
                  pathname: '/new-post',
                  hash: '#second',
                  search: '?quick-submit=true'
                }}>New Post</Link></li>*/}
              <li><NavLink to={{
                    pathname: '/new-post',
                    hash: '#second',
                    search: '?quick-submit=true'
                  }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path='/' exact render={() => <Posts />}/> Not Recommended
        <Route path='/new-post' exact render={() => <h1>Dummy</h1>}/>
        <Route path='/' exact component={() => {<Posts/>}}/>*/}
        <Switch>
          <Route path='/new-post' exact component={NewPost}/>
          <Route path='/posts' component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;
