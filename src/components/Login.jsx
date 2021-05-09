import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core"
import { auth, provider } from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
function Login() {
   const dispatch =  useDispatch();
    const signin = ()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login(
                {
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }
            ))
        })
        .catch(error=>alert('There is an error'))

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" 
                alt="not found"

                 />
                 <Button onClick={signin}
                 variant="contained"
                 color="primary"
                 >Signin</Button>
            </div>
        </div>
    )
}

export default Login
