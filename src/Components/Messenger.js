import React from 'react';
import './Messenger.css';
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

function Messenger() {

const handlesubmit=(e)=>{
  e.preventDefault();
}

  return (
    <div className="Messenger">

<div className='header'>
<Avatar/>

<form>
<input className='comment' placeholder='WHAT IS IN YOUR MIND SAY ? YUG KHOKHAR '/>
<input placeholder='IMAGE URL (optional)'className='img'/>

<button type='submit' onClick={handlesubmit}>HIDDEN BUTTON</button>
</form>
</div>
<div className='belowmsg'>

<div className='option_select'>
<VideocamIcon style={{color:"red"}}/>
<h4>LIVE VIDEO</h4>
</div>

<div className='option_select'>
<PermMediaIcon style={{color:"green"}}/>
<h4>PHOTO / VIDEO</h4>
</div>

<div className='option_select'>
<EmojiEmotionsOutlinedIcon style={{color:"#cb9d06"}}/>
<h4>FEELING / ACTIVITY</h4>
</div>

 </div>
</div>
  );
}

export default Messenger;
