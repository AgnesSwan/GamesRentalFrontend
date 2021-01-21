import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function UserSignIn() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const submitHandler = (e) => {
    e.preventDefault;
    //wkrotce signin action
  }
  const checkUser = () => {
    axios.get('', {

      mail: mail,
      password: password,
      role: role
    }).then(() => {
      console.log("success")
    });
  };
  return (
    <div className="user_container">
      <div>Sign in</div>
      <form className="form" onSubmit={submitHandler}>
        <label>E-mail</label>
        <input type="text" onChange={(event) => {
          setMail(event.target.value)
        }}></input>
        <label>Password</label>
        <input type="text" onChange={(event) => {
          setPassword(event.target.value)
        }}></input>
        <button type="submit">Sign in</button>
        <div>
          <Link to='/userregistration'>
            Create account

      </Link>
        </div> </form>
    </div>

  );
}

export default UserSignIn;