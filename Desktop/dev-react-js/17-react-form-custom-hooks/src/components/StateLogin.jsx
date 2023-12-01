
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import useInput from "../hooks/useInput";

export default function Login() {
  const
  {value: emailValue,
  handleInputChange: handleEmailChange, 
  handleInputBlur: handleEmailBlur,
  hasError: emailHasError
  }  = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const{value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  }   = useInput('',(value) => hasMinLength(value,6))

  function handleSubmit(event)
  {
    event.preventDefault();   //prevents default behaviour

    if(emailHasError || passwordHasError)
    {
      return; //stop continuing with logic
    }
    console.log(emailValue, passwordValue);
  }

 
  return (
    // <form>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label="Email"  
        id="email" 
        type="email" 
        name="email"
        onBlur={handleEmailBlur}
        onChange={handleEmailChange} 
        value={emailValue} 
        error={emailHasError && 'Entered email is invalid'}
        />

        <Input 
        label="Password"  
        id="password" 
        type="password" 
        name="password"
        onChange={handlePasswordChange}
        onBlur = {handlePasswordBlur} 
        value={passwordValue} 
        error={passwordHasError && 'Entered password is weak'}
        />
        </div>



        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email"       above method is a univeral method as our email and password have lot of things in common
          name="email" 
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email',event.target.value)} 
          value={enteredValues.email}/>

          <div className="control-error">{emailIsInvalid && <p> Please enter a valid email address </p>}</div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          onChange={(event) => handleInputChange('password',event.target.value)} 
          value={enteredValues.password}/>
        </div>
      </div> */}

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
