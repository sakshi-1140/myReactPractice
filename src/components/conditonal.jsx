import React from 'react'
import Home from './Home';
import Login from './Login';
function conditional() {
    const isUserLoggedIn=true;
  return (
    <div>
       {isUserLoggedIn? <Home/> : <Login/>}
    </div>
  )
//---------------------------------
//or using  if else
// let content;
//   const isUser2Logged=false;
//   if(isUser2Logged) {
//     content=<Home/>
//   }
//   else {
//     content=<Login/>
//   }
// return <>{content}</>
//--------------------------------------------


}


export default conditional