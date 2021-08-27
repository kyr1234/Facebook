import React from 'react';
import '/Sidebar.css';

//src is sometimes provided if the there is no icon provided

function SideBarRow({src,Icon,title}) {
  return (
 <div className='side'>
{src && <Avatar src={src} />}
 { Icon && <Icon />}
  <h4>{title}</h4>
  </div>
  );
}

export default SideBarRow;
