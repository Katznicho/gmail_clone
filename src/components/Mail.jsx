import { IconButton } from '@material-ui/core';
import React from 'react';
import "./Mail.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import {  selectOpenMail } from '../features/mailSlice';
import {useSelector} from "react-redux"

function Mail() {
    const mails = useSelector(selectOpenMail)
    console.log(`The mails are ${JSON.stringify(mails)}`)
 const history =  useHistory();
    return (
        <div className="mail">

            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton
                    onClick = {()=>history.push("/")}
                    >
                         <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{mails?.subject}</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p>{mails?.title}</p>
                    <p className="mail__time">{mails?.time}</p>
                </div>
                <div className="mail__message">
                    <p>{mails?.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Mail
