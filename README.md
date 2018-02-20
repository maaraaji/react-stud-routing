A descriptive study guide to understanding react routing.

| **InitialSetup** |
| --- |
|Pre-configured sample blog application|
|axios package installed|
|using dummy API - https://jsonplaceholder.typicode.com/|

![Routing](Routing.svg)

---
#### commit : [Tutorial] Setting up the router package
1. Install react-router and react-router-dom - This is not facebook provided package but it is the defacto package for routing in React.
    >:/react-stud-routing$ npm install --save react-router react-router-dom

2. We can enable routing in App.js or index.js file. We need to wrap the part of your app which should be able to read/render routes with BrowserRouter component from react-router-dom. We did it in App.js and that is router of our application.

3. Converted the existing components to containers (FullPost, NewPost since they are going to act as seperate Page) also created Posts container inside Blog container. Adjusted the imports accordingly.
---
#### commit : [Tutorial] Preparing the project for Routing
4. Separated Posts section to a separate container. Copied state & selected Post Handlers.

5. Removed .Posts class from Blog.css and created new Posts.css

6. Imported Posts to Blog as / component & Displayed it under navigation bar.
---
#### commit : [Tutorial] Setting Up and Rendering Routes
7. Import the named export { Route } from react-router-dom to the router component - in our case it is Blog.js.

8. Declare the self closing Route JSX element wherever you need to route something.

9. Route can pass below props (predefined and must be same as this),

  | Props | Definition |
  | --- | --- |
  | path | URL path which should trigger routing to which component. This controls the display of the page. |
  | exact | (Optional) whether the mentioned path should match exactly. If not mentioned, consider the path starts with mentioned char/word. |
  | render | (Optional) Anonymous arrow function that returns JSX of your choice. Not recommended for loading components. Recommended for short info messages|
  | component | This allows us to pass the component that should render with this route. It needs to be reference to a function or class that we want to use. |
---
#### commit : [Tutorial] Rendering Components for Routes
10. Routed '/' to the component Posts class imported from Posts.js

11. Example of routes

  | Recommended | Not Recommended |
  | --- | --- |
  | `<Route path='/' exact render={() => <h1>Dummy</h1>}/>` | `<Route path='/' exact render={() => <Posts/>}/>` |
  | `<Route path='/' exact component={() => {<Posts/>}}/>` | |
  | `<Route path='/' exact component={Posts}/> ` | |
---
#### commit : [Tutorial] Switching Between Pages
12. Created one more route for new-post and routed it to NewPost class in NewPost.js

13. Issue with current routing is whenever the URL routing happens, the react application refreshes and hence previous state & Props are lost. Need to fix this.
---
#### commit : [Tutorial] Using Links to Switch Pages without reloading
14. We can use Link component from react-router-dom instead of anchor tag <a></a>

| Props | Type | Description |
| --- | --- | --- |
| to | String, Dynamic JS Object | to direct where it should go to when clicking

| Props | Type | Description |
| --- | --- | --- |
| to | String | It can be a simple string like below `<Link to="/">Home</Link>` |
| to | Dynamic JS Object | It can be dynamic JS Object wrapped by {{}} (First {} to wrap JS OBject & Second {} to wrap the dynamic content) as below `<Link to={{pathname: '/', hash: ''#second', search: '?quick-submit = true'}}`>Home</Link>
| pathname | Object. Specific to 'to' Props | To direct the link to route |
| hash | Object. Specific to 'to' Props | To jump to HTML Element with id mentioned to hash |
| search | Object. Specific to 'to' Props | To pass any query parameters |

15. Need to import the named export *Link* from react-router-dom package.
