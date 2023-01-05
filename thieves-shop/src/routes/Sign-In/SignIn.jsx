import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignIn = () => {
  const login = async () => {
    const response = await signInWithGooglePopup();
    createUserDocument(response.user)
  };
  return (
    <div>
      <div>SignIn Page</div>
      <button onClick={login}>Sign in with google popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
