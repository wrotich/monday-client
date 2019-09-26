import React from 'react';

const Sidebar = (props) => {
  return (
    <div className='table-title'>
      <h1>Boards</h1>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Sidebar;
