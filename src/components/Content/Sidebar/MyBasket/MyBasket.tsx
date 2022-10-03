import * as React from 'react';
import NB920 from '../../../../assets/img/sneakers/920.png'
import NB574 from '../../../../assets/img/sneakers/574.png'
import Basket from './Basket/Basket';

const MyBasket = () => {
   return (<div className="sidebar__mybasket">
      <Basket imgSrc={NB574} title={'New Balance 574 Vintage Brights'} />
      <Basket imgSrc={NB920} title={'New Balance Made in UK 920 Chinese New Year'} />
      <div className="sidebar__line">
         <svg preserveAspectRatio="none" width="444.5" height="1" viewBox="0 0 410 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4.37114e-08" y1="0.5" x2="410" y2="0.500036" stroke="#CFCFCF" />
         </svg>
      </div>
   </div>);
}

export default MyBasket;