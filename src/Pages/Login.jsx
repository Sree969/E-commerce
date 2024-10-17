import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './style.css'
function Login(){
    
    function LoginValid(){
        let username=document.getElementById("uname").value
        let password=document.getElementById("psw").value
        let renm=window.sessionStorage.getItem("USERNAME");
        let repsw=window.sessionStorage.getItem("PASSWORD");
        if(username===renm && password===repsw){
            window.open("/")
        }
        else{
            alert("Enter valid details");
        }
    }

    return(
        <>
            <form action="">
                <fieldset>
                    <table>
                        <caption>Login Page</caption>
                        <tbody>
                        <tr>
                            <td><label htmlFor='uname'>Username </label></td>
                            <td><input id="uname" type="text" placeholder='Username' name="user"  pattern="[a-z @,#,$,&,*,_ 0-9 A-Z]{5,9}" required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="psw">Password</label></td>
                            <td><input type="password" id="psw" placeholder='Password' name="psword" pattern="[A-Z a-z @,#,$,%,&,* 0-9]{3,12}" required/></td>
                        </tr>
                        <tr>
                            <td><input onClick={LoginValid} type="submit" value="Login" id="lgn"/></td>
                        </tr>
                        </tbody>
                    </table>
                    <span>new user </span>
                    <Link to="/reg"><span id="regd"><u>Register</u></span></Link>
                </fieldset>
            </form>
        </>
    )
}
export default Login;