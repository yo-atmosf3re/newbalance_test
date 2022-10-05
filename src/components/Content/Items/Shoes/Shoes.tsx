import * as React from 'react';
import Price from './Price/Price';

type ShoesType = {
   title: string
   imgSrc: string
}

const Shoes = (props: ShoesType) => {
   return (<div>
      <div className="shoes__block">
         <div className="block__pic">
            <img src={props.imgSrc} />
         </div>
         <div className="block__title">
            {props.title}
         </div>
         <Price />
      </div>
   </div>);
}

export default Shoes;