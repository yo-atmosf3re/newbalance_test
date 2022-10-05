import React from 'react'
import NB574 from '../../../assets/img/sneakers/574.png'
import NB373 from '../../../assets/img/sneakers/373.png'
import NB670 from '../../../assets/img/sneakers/670.png'
import NB920 from '../../../assets/img/sneakers/920.png'
import NB5740 from '../../../assets/img/sneakers/5740.png'
import NBXR from '../../../assets/img/sneakers/x-racer.png'
import Shoes from './Shoes/Shoes'

enum sneakersTitle {
   NB574 = 'New Balance 574 Vintage Brights',
   NB373 = 'New Balance 373 Modern Classics',
   NB670 = 'New Balance Made in UK 670 Chinese New Year',
   NB920 = 'New Balance Made in UK 920 Chinese New Year',
   NB5740 = 'New Balance 5740 Think Colorfully',
   NBXR = 'New Balance Made in UK 670 Chinese New Year',
}

const Items = () => {
   return (<div className='content__items'>
      <Shoes title={sneakersTitle.NB574} imgSrc={NB574} />
      <Shoes title={sneakersTitle.NB920} imgSrc={NB920} />
      <Shoes title={sneakersTitle.NB373} imgSrc={NB373} />
      <Shoes title={sneakersTitle.NBXR} imgSrc={NBXR} />
      <Shoes title={sneakersTitle.NB5740} imgSrc={NB5740} />
      <Shoes title={sneakersTitle.NB670} imgSrc={NB670} />
   </div>);
}

export default Items;