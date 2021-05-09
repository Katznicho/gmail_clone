import React from 'react'
import "./EmailRow.css";
import {useHistory, Link} from "react-router-dom"
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Icon, IconButton , Checkbox,} from '@material-ui/core';
import { selectOpenMail } from '../features/mailSlice';
import {selectMail} from "../features/mailSlice";
import {useDispatch}from "react-redux"

function EmailRow({id,title, subject, description,time}) {
    const history = useHistory();
    //const openMail = useSelector(selectOpenMail())
    const dispatch = useDispatch()
    const openMail = ()=>{
        dispatch(selectMail({id, title, subject, description, time}))
        history.push("/mail")
    }
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox/>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className="emailRow__title">
                {title}
            </div>
            <div className="emailRow__message">
                <h4>{subject} {"-"}
                <span className="email__description">{description}</span>
                </h4>


            </div>
          <p className="emailRow__time">{time}</p>            
        </div>
    )
}

export default EmailRow
