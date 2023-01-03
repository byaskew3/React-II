1. Navigation Bar Component
- Create Navigation Route Component
- import {Outlet} from 'react-router-dom'
NOTE: using the Outlet component we can nest routes and have persistant rendering
- On App.js, Import our Navigation Component
- Make our Route component a two way tag, which is our parent route. Components wrapped
are our child components (which is our Outlet).

2. React Router Link
- On Navigation.jsx, using the Link Component, we can link to different routes. 
(Similar to anchor tags but for React)
- Wrap the Link Component around our logo and shop

3. Styling for Navigation
- Make an assets folder for our logo
NOTE: In react best practices, we keep an assets folder inside the src which may contain top-level CSS, images, and font files.
- import thieves logo into assets folder
- render our logo using the require inside of img tag
- Create our Navigation.css (copy and paste styles from completed file)
- on index.css add styling to our Link tag (anchor tag), and using the universal selector (*),
add box-sizing: border-box

4. Setting Up Firebase
- go to firebase and click console to see all projects
- create a new project (You do not need google analytics)
- under Build, we will only need 'Authentication' & 'Firestore Database'
- to use firebase with React, we need to use command, 'npm install firebase'
- create a sign-in route
- import SignIn component as a child route into App.js
- update Navigation.jsx with SignIn link

5. Authenticating With Firebase
- create utils folder, -> firebase folder -> firebase.js
- On the firebase site, lets get our credentials for our web app.
- copy and paste firebase credentials
NOTE: everything written in on this file almost never changes across any project.
- On the firebase site, go to Authentication -> set-up sign-in method -> click google
- On SignIn Component, lets import our signInWithGooglePopup method
- Create async login function
- create button with onchange handler that calls login function
- verify sign in with google
NOTE: Users info that sign-in with additional providers are not accessible with Firestore DB

6. Introducing Firestore Data Models
- On the firebase site, create Firestore Database (NoSQL database, JSON document)
NOTE: Firestore DB, is a collection of unique documents of their own data
- Under 'Rules', change "allow read, write: if false" -> "true", this allows us to make
any modifications to any document
- on firebase.js, import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
- create an instance of getFirestore()
- create async "createUserDocument" function
- on SignIn Component import our createUserDocument function, instead of logging our response, 
lets use our response object as a parameter inside createUserDocument