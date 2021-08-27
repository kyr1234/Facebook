import React from 'react';
import './StorOne.css';
import Avatar from "@material-ui/core/Avatar";
function Story({img,profsrc,name}) {
  return (
    <div style={{backgroundImage:`url(${img})`}} className="StorOne">
   <Avatar src={profsrc}/>
   <h4>{name}</h4>
    </div>
  );
}

export default Story;
