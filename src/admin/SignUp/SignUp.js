import './SignUp.css';

import React from 'react'

export default function SignUp() {
  return (
    <>
      
      
      <div className="header">Museum Adm<span>i</span>n</div>
      <div className="purple_background">
     <div className="container1">
      <div className="Sign_up_box">
       
        
        <h1>Sign Up</h1>
        
        <form>
        <label>Email</label><br/>
          <input type="text" /><br/>
        
        <label>Password</label><br/>
            <input type="text" /><br />

            <label>First Name</label><br/>
          <input type="text" /><br/>
        
        <label>Last Name</label><br/>
          <input type="text" /><br/>

         
            </form>
           <button>LOGIN</button>
 
          </div>
          <text>Already have an account?<span className="span_2">Log in</span></text>
          </div>
        </div>
        <footer></footer>
      
      </>
       
    
  )
}
