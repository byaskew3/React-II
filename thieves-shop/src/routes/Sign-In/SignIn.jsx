import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase"

const SignIn = () => {
  const login = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user)
    createUserDocument(response.user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={login}>
        Sign In With Google Popup
      </button>
    </div>
  )
}

export default SignIn