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
### commit : [Tutorial] Setting Up and Rendering Routes
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
### commit : [Tutorial] Rendering Components for Routes
10. Routed '/' to the component Posts class imported from Posts.js

11. Example of routes

  | Recommended | Not Recommended |
  | --- | --- |
  | `<Route path='/' exact render={() => <h1>Dummy</h1>}/>` | `<Route path='/' exact render={() => <Posts/>}/>` |
  | `<Route path='/' exact component={() => {<Posts/>}}/>` | |
  | `<Route path='/' exact component={Posts}/> ` | |
