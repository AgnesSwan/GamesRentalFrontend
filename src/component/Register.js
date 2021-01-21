import { useState } from 'react';
import axios from 'axios';

function UserRegister() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");
  const addUser = () => {
    axios.post('', {
      name: name,
      mail: mail,
      password: password,
      role: role
    }).then(() => {
      console.log("success")
    });
  };
  return (
    <div className="user_container">
      <div >Register</div>
      <label>Name</label>
      <input type="text" onChange={(event) => {
        setName(event.target.value)
      }}></input>
      <label>E-mail</label>
      <input type="text" onChange={(event) => {
        setMail(event.target.value)
      }}></input>
      <label>Password</label>
      <input type="text" onChange={(event) => {
        setPassword(event.target.value)
      }}></input>
      <label>Role</label>
      <input type="text" onChange={(event) => {
        setRole(event.target.value)
      }}></input>
      <button onClick={addUser}>Added User</button>

    </div>
  );

}
export default UserRegister;
