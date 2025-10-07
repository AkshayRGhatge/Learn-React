# Learn-React

## Create React using Vite and Create-React-ApP

### Best Practice

1. Component(function) we need to use capitalize.
2. Component file name use capitalize.
3. Some library force to use jsx if we are import the component in the jsx file.
4. Use fragement <> </> to return multiple tags.
5. Use .jsx as extension if we are returning html

### React

1. Single Page Application
2. React, create a tree structure and inject in the DOM.
3. Evaluated expression can be use to return variable in the JSX function {}
4. Babel is the tool that converts JSX into React.createElement() calls behind the scenes. JSX is not valid JavaScript on its own, so Babel acts as a transpiler that transforms JSX into something browsers can understand.
5. React hooks use for updating the DOM element for instance counter value, need to update at multiple spots at that time we have to use hooks otherwise in plain js we have to get the id, set the text content all over the code.
6. ReactDOM.createRoot() create react DOM structure, compare browser DOM and created react DOM structure and only replace the changes instead of reloading.
7. Reconcilation: The algorithm React uses to diff one tree (Browser DOM) with another(React DOM) to determine which parts need to be changed.
8. In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
9. Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
10. A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.
