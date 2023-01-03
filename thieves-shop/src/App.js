import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation';
import Home from "./routes/Home/Home";
import SignIn from './routes/Sign-In/SignIn';

const Shop = () => {
  return (
    <div>
      <h1>This is the shop page</h1>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
