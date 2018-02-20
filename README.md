A descriptive study guide to understanding react routing.

| **InitialSetup** |
| --- |
|Pre-configured sample blog application|
|axios package installed|
|using dummy API - https://jsonplaceholder.typicode.com/|

![Routing](Routing.svg)

---
####commit : [Tutorial] Setting up the router package
1. Install react-router and react-router-dom - This is not facebook provided package but it is the defacto package for routing in React.
'''npm install --save react-router react-router-dom'''

2. We can enable routing in App.js or index.js file. We need to wrap the part of your app which should be able to read/render routes with BrowserRouter component from react-router-dom. We did it in App.js and that is router of our application.

3. Converted the existing components to containers (FullPost, NewPost since they are going to act as seperate Page) also created Posts container inside Blog container. Adjusted the imports accordingly
---
