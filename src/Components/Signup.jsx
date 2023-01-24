import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [showPass,setShowPass] = useState(false);
  return (
    <FormContainer>
        <h2 className='heading'>Signup</h2>
        <form action="" method="post">
            
            <label htmlFor="signname">
                Full Name
            </label>
                <input type="text" name="name" className='textinput' id="signname"
                placeholder='Enter Your Full Name'
                onChange={(e)=>{setName(e.target.value)}} value={name} ref={nameRef}/>
            <label htmlFor="signemail">
                Email
            </label>
                <input type="email" name="name" className='emailinput' id="signemail"
                placeholder='Enter Your Email'
                onChange={(e)=>{setEmail(e.target.value)}} value={email} ref={emailRef}
                />
            <label htmlFor="signpassword">
                Password
            </label>
                <div className='passwordinput'>
                <input type="password" name="name" className='input' id="signpassword"
                placeholder='Please Enter Your Password'
                onChange={(e)=>{setPassword(e.target.value)}} value={password} ref={passwordRef} />
                <p className='eye' onClick={()=>{
                    if(passwordRef.current.type==="password"){
                        passwordRef.current.type = "text"
                        setShowPass(true);
                    } else { 
                        passwordRef.current.type = "password"
                        setShowPass(false);
                    }
                }}>
                    { showPass ? <BsFillEyeSlashFill/> : <BsFillEyeFill/>}
                </p>
                </div>
            <a className='forgetpassword' href="http://">Forget Your Password?</a>
            <input type="submit" value="Sign Up" className='submitbtn' />
        </form>
    </FormContainer>
  )
}
const FormContainer = styled.div`

    /* background: #d1d0d0; */
    width: 400px;
    height: 500px;
    border-radius: 5px;
    border: 0.5px solid;

    /*Here Desktop Based Css to work below styles*/
    //Mobile devices
    @media screen and (max-width: 480px){
        width: 100%;
        border: none;
        border-radius: unset;
    }
    //iPads, Tablets
    @media screen and (max-width: 768px){}
    //Small screens, laptops
    @media screen and (max-width: 1024px){}
    //Desktops, large screens
    @media screen and (max-width: 1200px){}
    
    .heading {
        margin: 10px;
    }
    
    form {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    form > label {
        margin-top: 20px;
    }
    .textinput,.emailinput,.passwordinput {
        background-color: #f3f6f8;
        outline: none;
        border: none;
        border-bottom: 1px solid;
        height: 30px;
        font-size: medium;
    }
    .passwordinput {
        display: flex;
    }
    .passwordinput > .input {
        border: none;
        outline: none;
        background: none;
        /* background-color: red; */
        height: 100%;
        flex: 1;
        font-size: medium;
    }

    .passwordinput > .eye {
        font-size: large;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        margin-left: 10px;
    }

    .forgetpassword {
        margin-left: auto;
        text-decoration: none;
        cursor: pointer;
        margin-top: 10px;
        color: black;
    }

    .submitbtn {
        margin-top: 20px;
        border-radius: 18px;
        border: 1px solid black;
        background-color: black;
        color: white;
        font-weight: 400;
        height: 30px;
    }

    @media(min-width:576px){}
    @media(min-width:768px){}
    @media(min-width:992px){}
    @media(min-width:1200px){}
`;


export default Signup