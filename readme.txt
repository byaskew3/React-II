1. Scaffolding Our Ecommerce Project
- Initialize starter code for React
(npx create-react-app)
NOTE: Remember to cd into your React folder
- Delete unnecessary files from folder
- Build our components based on our outline
- create categories array on App.js

2. Category List Component
- create components folder
- Create CategoryList.jsx, CategoryList.css (Copy and Paste css from completed code)
- import CategoryItem Component (Does not exist yet)
- import CategoryList Component into App.js

3. Category Item Component
- create CategoryItem.jsx, CategoryItem.css (Copy and Paste css from completed code)
- import CategoryItem Component to App.js

4. Adding Google Fonts
- link our selected font inside our index.html
- use our font-family in our CategoryItem.css

5. Routing with React Router v6
- npm install react-router-dom (to specify which version react-router-dom@6)

6. Setting up our Homepage
- import { BrowserRouter } from 'react-router-dom' on index.js
- wrap our BrowserRouter Component around our App Component
- create routes folder in src
- create our home route component
- copy and paste our App Component to our Home Route
- import Home Route Component into our App
- import { Routes, Route } from 'react-router-dom' on App.js
- Utilize Routes & Route Component with Home component