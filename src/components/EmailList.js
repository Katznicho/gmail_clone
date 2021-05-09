import { Checkbox, IconButton } from '@material-ui/core';
import React,{useState, useEffect} from 'react';
import "./EmailList.css";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RedoIcon from '@material-ui/icons/Redo';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Section from './Section';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InboxIcon from '@material-ui/icons/Inbox';
import EmailRow from './EmailRow';
import { db } from '../firebase/firebase';

function EmailList() {
    const [emails, setEmails] =  useState([]);
    useEffect(() => {   
        db.collection("emails").orderBy('timestamp', 'desc').onSnapshot((snapshot)=>setEmails(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        })))) 
        return () => {
            //cleanup
            
        }
    }, [])
    console.log(emails)
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                       <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>

            </div>

            <div className="emailList__sections">
                <Section Icon={IconButton} color="red" selected title="primary"/>
                <Section Icon={PeopleIcon} title="social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"/>
            </div>

            <div className="emailList__list">
                {
                    emails.map(({id, data:{to, subject, timestamp, message}})=>(<EmailRow
                     title
                     id={id}
                     key={id}
                     title={to}
                     subject={subject}
                     description={message}
                     time={new Date(timestamp?.seconds*1000).toUTCString()}
                    />))
                }
                
            </div>
            
        </div>
    )
}

export default EmailList
