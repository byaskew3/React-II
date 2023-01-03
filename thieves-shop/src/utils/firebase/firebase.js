import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvdHwlwsTYIpQu0H1LQD7ifDgh_2_iqlM",
  authDomain: "thieves-ecommerce.firebaseapp.com",
  projectId: "thieves-ecommerce",
  storageBucket: "thieves-ecommerce.appspot.com",
  messagingSenderId: "893327129233",
  appId: "1:893327129233:web:fe4fb25b5768ab23001d30",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

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

export const db = getFirestore();

export const createUserDocument = async (user) => {
    const userDocRef = doc(db, 'users', user.uid)
    console.log(userDocRef)

    const userData = await getDoc(userDocRef)
    console.log(userData.exists())
}