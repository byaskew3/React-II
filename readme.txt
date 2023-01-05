1. Finish Creating User Documents
- Now that we're getting the user document data with getDoc(), we have to check,
if the user does not exist in our database, create them using setDoc(), otherwise
return userDocRef
- verify if our user gets stored in our database

2. Creating Sign Up Form
- On firebase site, on sign-in method, add a new provider (Email/Password)
- Add SignUpForm Component to our components folder
- Create the basic info for the form and import it to our SignIn Route Component
- Go back and add the useState hook to keep track of our input field values
- Create handleChange Method to setStates
- verify in console

3. Add Sign Up Values to database
- on firebase.js, import { createUserWithEmailAndPassword } from 'firebase/auth'
- create createAuthUserWithEmailAndPassword async function
- import {createAuthUserWithEmailAndPassword} into SignUpForm Component
- create handleSubmit async method
NOTE: We'll need explicitly handle displayName value bc when we sign in with google, we get a 
value back, when we sign up utilizing the form, we do not get a value
- on firebase.js, add signUpName=null as a parameter to createUserDocument method
- inside of our try/catch block, create an if,else to determine if we're not getting a signUpName
value, then don't do anything, otherwise setDoc should have "displayName: signUpName"
- on SignUpForm, create resetFormFields Method
- implement resetFormFields under our await createUserDocument()
