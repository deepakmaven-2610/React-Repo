import { useRef, useState } from "react";

export default function Login() {
  const[emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event)
  {
    event.preventDefault();   //prevents default behaviour
    console.log("Submitted");

    const enteredEmail = email.current.value;
    const enteredpassword = password.current.value;

    //console.log(enteredEmail,enteredpassword);
    email.current.value = ''; //reseting value in refs

    const emailIsValid = enteredEmail.includes('@');  //validation
    if(!emailIsInvalid)
    {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
  }


  return (
    // <form>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          ref={email}
        />
        <div className="control-error">{emailIsInvalid && <p>Please enter a valid email </p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button> */}
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
