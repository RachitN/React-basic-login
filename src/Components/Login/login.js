import { useRef, useState } from 'react';
import './login.css'
const Login = (props) => {
    const emailInput = useRef();
    const passwordInput = useRef();
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
        if(emailInput.current.value.trim().length!=0 && emailInput.current.value.includes('@') && passwordInput.current.value.length>6)
        {
            validFunction(true)
        }
        else
        {
            validFunction(false)
        }
    }

    const [valid,validFunction] = useState(false)

  return (
    <>
      <form onSubmit={login} onChange={checkValid}>
        <div className="formDiv" >
          <div>
            <label>Email</label>
            <input type="email" ref={emailInput}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={passwordInput}></input>
          </div>
          <button className={valid?'valid':'notValid'} type='submit'>Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
