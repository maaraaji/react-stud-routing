import React, { Component } from 'react';
import { Route, NavLink, Switch , Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import asyncComp from '../../hoc/asyncComp';


const AysncNewPost = asyncComp(() => import ('./NewPost/NewPost'));

class Blog extends Component {

  state = {
    auth: true
  }

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
          {this.state.auth ? <Route path='/new-post' exact component={NewPost}/> : null }
          <Route path='/posts' component={Posts}/>
          <Route render={() => <h1 style={{textAlign: 'center'}}>Page not found or Unauthorized</h1>}/>
          {/*<Redirect from='/' to='/posts'/>*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
