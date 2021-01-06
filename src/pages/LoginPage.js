import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameOnChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordOnChange(event) {
    setPassword(event.taret.value);
  }

  function loginUser(event) {
    if (username === password) {
      alert("Welcome");
    } else {
      alert("Invalid Credentials");
    }
  }

  
    
  
  
  return(
    <div className={"auth-container"}>
      <h2>Login page</h2>
      <form className={"auth"} onSubmit={loginUser}>
        <input
          onChange={handleUsernameOnChange}
          value={"Username"}
          type={"text"}
          placeholder={"Please enter your username"}
        />
        <input
          onChange={handlePasswordOnChange}
          value={"password"}
          placeholder={"Please enter your password"}
        />
        <button type={"submit"}>Login</button>
      </form>
    </div>
  
    );
}
export default Login;

















































































































































































































































// import React from 'react';
//  import '../styles/Login.css';

// class LoginContainer extends React.Component {
//     render(){
//         return(
//             <div className={'authBox'}>
//                 <div className={'leftBox'}>
//                     <div className={'bgGreen'}/>
//                     <div className={'imageAuth'} />
//                     <div className={'imageText bold style1'}>whatever</div>
//                     <div className={'imageText style2'}>kindly login to buy</div>
//                 </div>
//                 <div className={'rightBox'}></div>
//                 <div className={'box'}></div>

//             </div>
//         )

//     }
// }


// export default LoginContainer;
