import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login';
import Welcome from './Components/Welcome/Welcome';
import { useState } from 'react';

function App() {
  const value = localStorage.getItem('loggedIn')?true:false
  const [loggedIn, setLogin] = useState(value);
  const login = value=>{
    setLogin(value)
  }
  return (
    <div >
      {loggedIn?<Welcome login={login}></Welcome>:<Login login = {login}></Login>}
    </div>
  );
}

export default App;
