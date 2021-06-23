import React from 'react'
import './Sidebar.css'
import {SidebarData} from './SidebarData'

const Sidebar=()=> {
    return (
        <>
        <div className="Sidebar">
            <ul className="SidebarList">
           {SidebarData.map((val,key)=>{
               return(
                   <div className="container">
                    <li key={key} className="row" 
                   
                    onClick={()=> (window.location.pathname=val.link)}>
                    
                        <div id="icon">{val.icon}</div>{" "}
                        <div id="title"> {val.title}</div>
                    </li>
                    </div>
               )
           })}
           </ul>
            
        </div>

            
        </>
    )
}

export default Sidebar
