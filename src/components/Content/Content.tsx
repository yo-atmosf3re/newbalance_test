import React from 'react'
import NB574 from '../../assets/img/sneakers/574.png'
import NB373 from '../../assets/img/sneakers/373.png'
import NB670 from '../../assets/img/sneakers/670.png'
import NB920 from '../../assets/img/sneakers/920.png'
import NB5740 from '../../assets/img/sneakers/5740.png'
import NBXR from '../../assets/img/sneakers/x-racer.png'
import Items from './Items/Items'
import Sidebar from './Sidebar/Sidebar'

const Content = () => {
   return (<div className="content">
      <div className="container">
         <Items />
         <Sidebar />
      </div>
   </div>);
}

export default Content;