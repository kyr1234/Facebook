import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
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
 <div className='side'>
  <Avatar/>
  <h4>YUG KHOKHAR</h4>
  </div>

  <div className='side'>
  <Hospital/>
  <h4>Covid-19 Information center</h4>
  </div>


  <div className='side'>
  <Flag/>
  <h4>Pages</h4>
  </div>

  <div className='side'>
  <Contacts/>
  <h4>Friends</h4>
  </div>

  <div className='side'>
  <Messenger/>
  <h4>Messenger</h4>
  </div>

  <div className='side'>
  <Store/>
  <h4>MarketPlace</h4>
  </div>



  <div className='side'>
  <Videolib/>
  <h4>Videos</h4>
  </div>


  <div className='side'>
  <Videolib/>
  <h4>Videos</h4>
  </div>


  <div className='side'>
  <Dropdown/>
  <h4>MarketPlace</h4>
  </div>

  </div>
  );
}

export default Sidebar;
