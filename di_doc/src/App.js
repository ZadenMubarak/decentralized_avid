import { BrowserRouter as Router, Routes, Route, Link,Navigate  } from "react-router-dom";
import React from "react";
import Login from "./components/Login";


import UAuth from '@uauth/js'

const uauth = new UAuth(
  {
    clientID: "5dccaa6b-ffde-407a-8f55-af2e0831faab",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet"
  
  }
)


window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()
 
    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}


window.logout = async () => {
  await uauth.logout()
  console.log('Logged out with Unstoppable')
}



// function App() {
  

//   return (
//     <Router>
//       <nav >
      
//         <Link to="/login">  Login </Link>
//       </nav>
//       <Routes>
       
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <div> Foooter </div>
//       <button onClick={<Navigate to='/login' replace={true}/>}>route</button>
//     </Router>
//   );
// }

// export default App;

