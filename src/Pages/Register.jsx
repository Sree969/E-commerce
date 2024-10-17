import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import './style.css'
function Register(){

    function Registervalid(){
        let username=document.getElementById("uname").value
        let password=document.getElementById("psw").value
        let email=document.getElementById("Email").value
        window.sessionStorage.setItem("USERNAME",username);
        window.sessionStorage.setItem("PASSWORD",password);
        window.sessionStorage.setItem("EMail",email);
        // if(username!="" && password!="" && email!=""){
            window.open("/login")
        // }else{
            // alert("Enter your details..")
        // }
    }

    return(
        <form action="">
            <fieldset>
                <table>
                    <caption>Register Page</caption>
                    <tbody>
                    <tr>
                        <td>
                            <span className='cs1'><i className="fab fa-google"></i></span>
                            <span className='cs2'><button type="button">Sign up with Google</button></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className='cs1'><i className="fab fa-facebook"></i></span>
                            <span className='cs2'><button type="button">Continue with Facebook</button></span>
                        </td>
                    </tr>
                    <tr><td><label htmlFor="uname">Username </label></td></tr>
                    <tr><td><input type="text" placeholder='e.g. maria93' id="uname" name="user" pattern='[a-z @,$,&,*,#,_ 0-9]{5,9}' required/></td></tr>
                    <tr><td><label htmlFor="Email">Email</label></td></tr>
                    <tr><td><input type="email" placeholder='example@gmail.com' id="Email" name="Email" required/></td></tr>
                    <tr><td><label htmlFor="psw">Password</label></td></tr>
                    <tr><td><input type="password" id="psw" placeholder='Password' name="psword" pattern='[A-Z a-z @,#,$,&,*,_ 0-9]{3,12}' required/></td></tr>
                    <tr><td><input onClick={Registervalid} type="submit" value="Register" id="regis"/></td></tr>

                    </tbody>
                </table>
            </fieldset>
        </form>
    )
}
export default Register