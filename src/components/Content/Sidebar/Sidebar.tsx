import * as React from 'react';
import MyBasket from './MyBasket/MyBasket';
import Receipt from './Receipt/Receipt';

const Sidebar = () => {
   return (<div className="content__sidebar">
      <div className="sidebar__title">My basket</div>
      <MyBasket />
      <Receipt />
   </div>);
}

export default Sidebar;