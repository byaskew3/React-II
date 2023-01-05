import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocument } from "../../utils/firebase/firebase";

const SignUpForm = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const resetFormFields = () => {
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }

    const handleSubmit = async (event) => {
      event.preventDefault()

      if (password !== confirmPassword){
        alert('Passwords do not match!')
        return;
      }

      try {
        const response = await createAuthUserWithEmailAndPassword(email, password)
        console.log(response.user)
        await createUserDocument(response.user, displayName)
        resetFormFields()
      } catch(error) {
        console.log('User creation encountered an error!',error)
      }
    }

    const handleChange = (event) => {
        // Destructuring
        const { name, value } = event.target
        switch(name) {
            case 'displayName':
                setDisplayName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'confirmPassword':
                setConfirmPassword(value)
                break;
            default:
        }

    }

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Display Name" onChange={handleChange} name="displayName" value={displayName}/>
        <input type="email" required placeholder="Email" onChange={handleChange} name="email" value={email}/>
        <input type="password" required placeholder="Password" onChange={handleChange} name="password" value={password}/>
        <input type="password" required placeholder="Confirm Password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
