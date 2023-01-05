import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvdHwlwsTYIpQu0H1LQD7ifDgh_2_iqlM",
    authDomain: "thieves-ecommerce.firebaseapp.com",
    projectId: "thieves-ecommerce",
    storageBucket: "thieves-ecommerce.appspot.com",
    messagingSenderId: "893327129233",
    appId: "1:893327129233:web:fe4fb25b5768ab23001d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => {
    return (
        signInWithPopup(auth, provider)
    )
}

export const db = getFirestore()

export const createUserDocument = async (user, signUpName=null) => {
    console.log(user.uid)
    const userDocRef = doc(db, 'users', user.uid)
    
    const userData = await getDoc(userDocRef)
    console.log(userData.exists())

    if(!userData.exists()) {
        const { displayName, email } = user
        const createdDate = new Date();
        try {
            if (!signUpName) {
                await setDoc(userDocRef, {
                    displayName, 
                    email, 
                    createdDate
                })
            } else {
                await setDoc(userDocRef, {
                    displayName: signUpName, 
                    email, 
                    createdDate,
                })
            }
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(email && password) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
}