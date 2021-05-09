import React from 'react'
import "./SendMail.css";
import {useForm} from "react-hook-form"
import {Button, IconButton} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import { closeSendMessage } from '../features/mailSlice';
import {useDispatch} from "react-redux"
import { db } from '../firebase/firebase';
import firebase from "firebase";
function SendMail() {
    const {register, handleSubmit, watch, formState:{errors}} =  useForm()
  const onSubmit = (formData)=>{
      console.log(formData)
      db.collection("emails").add({
          to:formData.to,
          subject:formData.message,
          message:formData.message,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      dispatch(closeSendMessage())
  }
  const dispatch = useDispatch()
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <IconButton onClick={()=>dispatch(closeSendMessage())}>
                <CloseIcon className="sendMail__close"/>
                </IconButton>
            </div>
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="sendMail__inputs">
               <input type="email" {...register("to", { required: true })} 
               placeholder="To"/>
               {errors.to && <span className="sendMail__error">this field is required</span>}
               <input type="text" placeholder="Subject" {...register("subject", { required: true })}/>
               {errors.subject && <span className="sendMail__error"> this field is required</span>}

               <input type="text" placeholder="Message..."
               
               className="sendMail__message"
               {...register("message", { required: true })}
               />
                {errors.message && <span className="sendMail__error">this field is required</span>}
               </div>
               <div className="sendMail__options">
                   <Button className="sendMail__send" color="primary" variant="contained" type="submit">Send</Button>
               </div>
           </form>
        </div>
    )
}

export default SendMail
