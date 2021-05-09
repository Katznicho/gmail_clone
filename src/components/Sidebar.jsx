import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add"
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NearMeIcon from '@material-ui/icons/NearMe';
import DuoIcon from '@material-ui/icons/Duo';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
function Sidebar() {
  const dispatch =  useDispatch();
    return (
        <div className="sidebar">
            <Button 
            className="sidebar__compose"
             startIcon = {<AddIcon fontSize="large"/>}
             onClick = {()=>dispatch(openSendMessage())}
            >Compose</Button>
            <SidebarOptions
             Icon = {InboxIcon}
             title="Inbox"
             number = {10} isSelected
            />
            <SidebarOptions
            Icon={StarIcon}
            title="starred"
            number={10}
            />
            <SidebarOptions
            Icon = {AccessTimeOutlinedIcon}
            title="snoozed"
            number={12}
            />
            <SidebarOptions
            Icon={NearMeIcon}
            title="sent"

            />
            <SidebarOptions
            Icon={NoteAddIcon}
            title="Drafts"
            />
            <SidebarOptions
            Icon={ExpandMoreOutlinedIcon}
            title="Expand"
            
            />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                     <IconButton>
                         <PersonIcon/>
                     </IconButton>
                     <IconButton>
                         <DuoIcon/>
                     </IconButton>
                     <IconButton>
                         <PhoneIcon/>
                     </IconButton>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
