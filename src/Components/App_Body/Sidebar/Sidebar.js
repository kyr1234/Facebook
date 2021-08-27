import React from 'react';
import './Sidebar.css';
import {Avatar} from '@material-ui/core';
import SideBarRow from './SideBarRow.js';
import Hospital from '@material-ui/icons/LocalHospitalOutlined';
import Flag from '@material-ui/icons/FlagOutlined';
import Contacts from '@material-ui/icons/SupervisedUserCircle';
import Messenger from '@material-ui/icons/MessageOutlined';
import Store from '@material-ui/icons/Storefront';
import Videolib from '@material-ui/icons/VideoLibraryOutlined';
import Dropdown from '@material-ui/icons/ArrowDropDownOutlined';

function Sidebar() {
  return (
  <div className="Sidebar">
     
  <SideBarRow title='YUG KHOKHAR' Icon={Avatar}/>
  <SideBarRow title='Covid-19 Information center' Icon={Hospital}/>
  <SideBarRow title='Pages' Icon={Flag}/>
  <SideBarRow title='Friends' Icon={Contacts}/>
  <SideBarRow title='Messenger' Icon={Messenger}/>
  <SideBarRow title='Marketplace' Icon={Store}/>
  <SideBarRow title='Videos' Icon={Videolib}/>
  <SideBarRow title='MarketPlace' Icon={Dropdown}/>
   
  </div>
  );
}

export default Sidebar;
