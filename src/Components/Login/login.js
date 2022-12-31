import { useEffect, useRef, useState } from 'react';
import './login.css'
const Login = (props) => {
    const [emailInput,setEmailInput] = useState('');
    const [passwordInput,setPasswordInput] = useState('');
    const login = event=>{
        event.preventDefault()
        if(valid)
            {
                props.login(true)
                localStorage.setItem('loggedIn','1');
            }
        // checKValid()
    }
    const checkValid = ()=>{
        if(emailInput.trim().length!=0 && emailInput.includes('@') && passwordInput.length>6)
        {
            validFunction(true)
        }
        else
        {
            validFunction(false)
        }
    }

    const setEmailInputHandler = event=>{
        setEmailInput(event.target.value);
    }
    const setPasswordInputHandler = event=>{
        setPasswordInput(event.target.value);
    }

    useEffect(checkValid,[emailInput,passwordInput])

    const [valid,validFunction] = useState(false)

  return (
    <>
      <form onSubmit={login} >
        <div className="formDiv" >
          <div>
            <label>Email</label>
            <input type="email" value={emailInput} onChange = {setEmailInputHandler}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={passwordInput} onChange={setPasswordInputHandler}></input>
          </div>
          <button className={valid?'valid':'notValid'} type='submit'>Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
