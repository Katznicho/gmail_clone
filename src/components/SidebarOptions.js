import React from 'react';
import "./SidebarOptions.css";

function SidebarOptions({Icon, title, number, isSelected}) {
    return (
        <div className={`sidebarOptions ${isSelected && 'sidebar--active'}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>
            {number}
            </p>
            
        </div>
    )
}

export default SidebarOptions
