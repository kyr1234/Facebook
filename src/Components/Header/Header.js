import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import Videolib from '@material-ui/icons/VideoLibraryOutlined';
import Store from '@material-ui/icons/StorefrontOutlined';
import Contacts from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import Notify from '@material-ui/icons/NotificationsNoneOutlined';


function Header() {
  return (
    <div className="Header">
      <div className='header-left'>

      <img className='fb-icon' src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='fb-icon'/>

      <div className='input'>
        <span className='search-icon'><SearchIcon/></span>
         <input type='text' placeholder='Search Facebook' className='search' />
       
      </div>
      </div>
    
  <div className='header-middle'>
          <div className='header_option'> 
           <HomeIcon/>
             </div>
          <div className='header_option'> 
            <FlagIcon/>
          </div>
           <div className='header_option'> 
           <Videolib/>
           </div>
          <div className='header_option'> 
          <Store/>
          </div>

           <div className='header_option'> 
            <Contacts/>
             </div>
  </div>


     <div className='header-right'>


<div className='info'>
<Avatar/>
<h4>YUG</h4>
</div>

<div className='icons'>
<Notify/>
</div>








      </div>
  
  
  
  
  
    </div>
  );
}

export default Header;
