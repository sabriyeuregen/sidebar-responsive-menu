import React from 'react'
import "./Sidebar.scss";
import SidebarTop from "../SidebarTop/SidebarTop";
import SidebarBottom from "../SidebarBottom/SidebarBottom";
import SidebarCenter from "../SidebarCenter/SidebarCenter";
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarTop/>
      <SidebarCenter/>
      <SidebarBottom/>
      </div>
  )
}

export default Sidebar;