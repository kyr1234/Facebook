import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function Post({profilesrc,username,img,timestamp,message}) {
  return (
  <div className="Post">
    <div className='top'>
      <Avatar className='avatar' src={profilesrc}/>
      <div className='post_details'>
         <h4>{username}</h4>
         <p>Timestamp</p>
    </div>
  </div>

  <div className='post_bottom'>
  <p>{message}</p>
  </div>

 <div className='post_img'>
  <img src={img} className='images'/>
    </div>

<div className='options'>

<div className='option'>
<ThumbUpAltOutlinedIcon/>
<h4>Like</h4>
</div>

<div className='option'>
<ChatOutlinedIcon/>
<h4>Message</h4>
</div>

<div className='option'>
<ShareOutlinedIcon/>
<h4>Share</h4>
</div>

</div>




</div>
  );
}

export default Post;
