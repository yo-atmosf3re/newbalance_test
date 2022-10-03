import * as React from 'react';
import { useState } from 'react';
import Sidebar from '../../Content/Sidebar/Sidebar';
import NB920 from '../../../assets/img/sneakers/920.png'
import NB574 from '../../../assets/img/sneakers/574.png'

const Burger = () => {
   const [burger, setBurger] = useState(false);
   const burgerHandler = () => {
      setBurger(!burger)
      console.log(burger)
   }
   return (
      <>
         {!!burger ? <div onClick={burgerHandler} className='header__burger-rotate'><span />
            <div className='header__burger-sidebar'>
               <div className="burger-sidebar__content" onClick={e => e.stopPropagation()}>
                  <div className="content__title">My basket</div>
                  <div className="content__mybaskets">
                     <div className="mybasket__content-basket">
                        <div className="content-basket__picture">
                           <img src={NB574} alt="" />
                        </div>
                        <div className="content-basket__title">
                           New Balance 574 Vintage Brights
                        </div>
                        <div className="content-basket__counter">
                           <div className="content-counter__minus">
                              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10.8879 0C11.8037 0 12.6883 0.118056 13.5417 0.354167C14.3951 0.590278 15.1895 0.927083 15.9249 1.36458C16.6604 1.80208 17.3334 2.32292 17.9439 2.92708C18.5545 3.53125 19.0748 4.20486 19.505 4.94792C19.9352 5.69097 20.2717 6.48958 20.5145 7.34375C20.7573 8.19792 20.8787 9.08333 20.8787 10C20.8787 10.9167 20.7608 11.8021 20.5249 12.6562C20.289 13.5104 19.9525 14.3056 19.5154 15.0417C19.0783 15.7778 18.5579 16.4514 17.9543 17.0625C17.3507 17.6736 16.6777 18.1944 15.9353 18.625C15.193 19.0556 14.3951 19.3924 13.5417 19.6354C12.6883 19.8785 11.8037 20 10.8879 20C9.97203 20 9.08742 19.8819 8.23403 19.6458C7.38064 19.4097 6.58623 19.0729 5.85079 18.6354C5.11535 18.1979 4.44235 17.6771 3.8318 17.0729C3.22124 16.4688 2.70088 15.7951 2.27072 15.0521C1.84056 14.309 1.50406 13.5139 1.26122 12.6667C1.01839 11.8194 0.896973 10.9306 0.896973 10C0.896973 9.08333 1.01492 8.19792 1.25082 7.34375C1.48671 6.48958 1.82321 5.69444 2.26031 4.95833C2.69741 4.22222 3.21777 3.54861 3.82139 2.9375C4.425 2.32639 5.098 1.80556 5.84038 1.375C6.58276 0.944444 7.37717 0.607639 8.22362 0.364583C9.07007 0.121528 9.95815 0 10.8879 0ZM10.8879 18.6667C11.6857 18.6667 12.4524 18.566 13.1878 18.3646C13.9233 18.1632 14.6136 17.8715 15.2589 17.4896C15.9041 17.1076 16.4869 16.6562 17.0073 16.1354C17.5276 15.6146 17.9786 15.0312 18.3602 14.3854C18.7418 13.7396 19.0332 13.0486 19.2344 12.3125C19.4356 11.5764 19.5397 10.8056 19.5466 10C19.5466 9.20139 19.446 8.43403 19.2448 7.69792C19.0436 6.96181 18.7522 6.27083 18.3706 5.625C17.989 4.97917 17.538 4.39583 17.0177 3.875C16.4973 3.35417 15.9145 2.90278 15.2693 2.52083C14.624 2.13889 13.9337 1.84722 13.1983 1.64583C12.4628 1.44444 11.6927 1.34028 10.8879 1.33333C10.09 1.33333 9.32331 1.43403 8.58787 1.63542C7.85243 1.83681 7.16209 2.12847 6.51685 2.51042C5.8716 2.89236 5.2888 3.34375 4.76844 3.86458C4.24808 4.38542 3.79711 4.96875 3.41551 5.61458C3.03391 6.26042 2.74251 6.95139 2.54131 7.6875C2.3401 8.42361 2.23603 9.19444 2.22909 10C2.22909 10.7986 2.32969 11.566 2.5309 12.3021C2.7321 13.0382 3.02351 13.7292 3.4051 14.375C3.7867 15.0208 4.23768 15.6042 4.75803 16.125C5.27839 16.6458 5.86119 17.0972 6.50644 17.4792C7.15168 17.8611 7.84203 18.1528 8.57747 18.3542C9.31291 18.5556 10.083 18.6597 10.8879 18.6667ZM4.89333 9.33333H16.8824V10.6667H4.89333V9.33333Z" fill="black" />
                              </svg>
                           </div>
                           <div className="content-counter__value">
                              1
                           </div>
                           <div className="content-counter__plus">
                              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10.8305 0C11.7476 0 12.6322 0.117188 13.4843 0.351562C14.3364 0.585938 15.13 0.924479 15.865 1.36719C16.6 1.8099 17.2732 2.33073 17.8846 2.92969C18.496 3.52865 19.0196 4.20247 19.4554 4.95117C19.8912 5.69987 20.2262 6.4974 20.4604 7.34375C20.6945 8.1901 20.8149 9.07552 20.8214 10C20.8214 10.918 20.7043 11.8034 20.4701 12.6562C20.236 13.5091 19.8977 14.3034 19.4554 15.0391C19.0131 15.7747 18.4928 16.4486 17.8944 17.0605C17.2959 17.6725 16.6227 18.1966 15.8747 18.6328C15.1267 19.069 14.3299 19.4043 13.4843 19.6387C12.6387 19.873 11.7541 19.9935 10.8305 20C9.91336 20 9.02875 19.8828 8.17666 19.6484C7.32457 19.4141 6.52777 19.0788 5.78626 18.6426C5.04475 18.2064 4.37154 17.6855 3.76662 17.0801C3.1617 16.4746 2.64134 15.7975 2.20554 15.0488C1.76974 14.3001 1.43476 13.5059 1.2006 12.666C0.966437 11.8262 0.846104 10.9375 0.8396 10C0.8396 9.08203 0.95668 8.19661 1.19084 7.34375C1.425 6.49089 1.76324 5.69661 2.20554 4.96094C2.64785 4.22526 3.16821 3.55143 3.76662 2.93945C4.36503 2.32747 5.03825 1.80339 5.78626 1.36719C6.53428 0.93099 7.33108 0.595703 8.17666 0.361328C9.02224 0.126953 9.90685 0.00651042 10.8305 0ZM10.8305 18.75C11.637 18.75 12.4111 18.6458 13.1526 18.4375C13.8941 18.2292 14.5901 17.9362 15.2405 17.5586C15.891 17.181 16.4796 16.7253 17.0065 16.1914C17.5334 15.6576 17.9887 15.0684 18.3724 14.4238C18.7562 13.7793 19.0522 13.0827 19.2603 12.334C19.4684 11.5853 19.5725 10.8073 19.5725 10C19.5725 9.19271 19.4684 8.41797 19.2603 7.67578C19.0522 6.93359 18.7595 6.23698 18.3822 5.58594C18.0049 4.9349 17.5496 4.3457 17.0163 3.81836C16.4829 3.29102 15.8942 2.83529 15.2503 2.45117C14.6063 2.06706 13.9104 1.77083 13.1623 1.5625C12.4143 1.35417 11.637 1.25 10.8305 1.25C10.0239 1.25 9.2499 1.35417 8.50839 1.5625C7.76688 1.77083 7.0709 2.0638 6.42045 2.44141C5.77 2.81901 5.18134 3.27474 4.65448 3.80859C4.12762 4.34245 3.6723 4.93164 3.28854 5.57617C2.90477 6.2207 2.60882 6.91732 2.40068 7.66602C2.19253 8.41471 2.08846 9.19271 2.08846 10C2.08846 10.8073 2.19253 11.582 2.40068 12.3242C2.60882 13.0664 2.90152 13.763 3.27878 14.4141C3.65604 15.0651 4.11136 15.6576 4.64472 16.1914C5.17809 16.7253 5.76675 17.181 6.41069 17.5586C7.05464 17.9362 7.75062 18.2292 8.49863 18.4375C9.24665 18.6458 10.0239 18.75 10.8305 18.75ZM11.4549 9.36523H15.8259V10.6152H11.4549V15H10.2061V10.6152H5.83504V9.36523H10.2061V5H11.4549V9.36523Z" fill="black" />
                              </svg>
                           </div>
                           <div className="content-counter__initialprice">$ 650</div>

                        </div>
                        <div className="content-basket__cross">
                           <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.756 9L18.7001 16.9629L17.6639 18L9.70834 10.0487L1.75274 18L0.716553 16.9629L8.66064 9L0.716553 1.03713L1.75274 0L9.70834 7.95134L17.6639 0L18.7001 1.03713L10.756 9Z" fill="#CFCFCF" />
                           </svg>
                        </div>
                     </div>
                     <div className="mybasket__content-basket">
                        <div className="content-basket__picture">
                           <img src={NB920} alt="" />
                        </div>
                        <div className="basket__title">
                           New Balance Made in UK 920 Chinese New Year
                        </div>
                        <div className="content-basket__counter">
                           <div className="content-counter__minus">
                              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10.8879 0C11.8037 0 12.6883 0.118056 13.5417 0.354167C14.3951 0.590278 15.1895 0.927083 15.9249 1.36458C16.6604 1.80208 17.3334 2.32292 17.9439 2.92708C18.5545 3.53125 19.0748 4.20486 19.505 4.94792C19.9352 5.69097 20.2717 6.48958 20.5145 7.34375C20.7573 8.19792 20.8787 9.08333 20.8787 10C20.8787 10.9167 20.7608 11.8021 20.5249 12.6562C20.289 13.5104 19.9525 14.3056 19.5154 15.0417C19.0783 15.7778 18.5579 16.4514 17.9543 17.0625C17.3507 17.6736 16.6777 18.1944 15.9353 18.625C15.193 19.0556 14.3951 19.3924 13.5417 19.6354C12.6883 19.8785 11.8037 20 10.8879 20C9.97203 20 9.08742 19.8819 8.23403 19.6458C7.38064 19.4097 6.58623 19.0729 5.85079 18.6354C5.11535 18.1979 4.44235 17.6771 3.8318 17.0729C3.22124 16.4688 2.70088 15.7951 2.27072 15.0521C1.84056 14.309 1.50406 13.5139 1.26122 12.6667C1.01839 11.8194 0.896973 10.9306 0.896973 10C0.896973 9.08333 1.01492 8.19792 1.25082 7.34375C1.48671 6.48958 1.82321 5.69444 2.26031 4.95833C2.69741 4.22222 3.21777 3.54861 3.82139 2.9375C4.425 2.32639 5.098 1.80556 5.84038 1.375C6.58276 0.944444 7.37717 0.607639 8.22362 0.364583C9.07007 0.121528 9.95815 0 10.8879 0ZM10.8879 18.6667C11.6857 18.6667 12.4524 18.566 13.1878 18.3646C13.9233 18.1632 14.6136 17.8715 15.2589 17.4896C15.9041 17.1076 16.4869 16.6562 17.0073 16.1354C17.5276 15.6146 17.9786 15.0312 18.3602 14.3854C18.7418 13.7396 19.0332 13.0486 19.2344 12.3125C19.4356 11.5764 19.5397 10.8056 19.5466 10C19.5466 9.20139 19.446 8.43403 19.2448 7.69792C19.0436 6.96181 18.7522 6.27083 18.3706 5.625C17.989 4.97917 17.538 4.39583 17.0177 3.875C16.4973 3.35417 15.9145 2.90278 15.2693 2.52083C14.624 2.13889 13.9337 1.84722 13.1983 1.64583C12.4628 1.44444 11.6927 1.34028 10.8879 1.33333C10.09 1.33333 9.32331 1.43403 8.58787 1.63542C7.85243 1.83681 7.16209 2.12847 6.51685 2.51042C5.8716 2.89236 5.2888 3.34375 4.76844 3.86458C4.24808 4.38542 3.79711 4.96875 3.41551 5.61458C3.03391 6.26042 2.74251 6.95139 2.54131 7.6875C2.3401 8.42361 2.23603 9.19444 2.22909 10C2.22909 10.7986 2.32969 11.566 2.5309 12.3021C2.7321 13.0382 3.02351 13.7292 3.4051 14.375C3.7867 15.0208 4.23768 15.6042 4.75803 16.125C5.27839 16.6458 5.86119 17.0972 6.50644 17.4792C7.15168 17.8611 7.84203 18.1528 8.57747 18.3542C9.31291 18.5556 10.083 18.6597 10.8879 18.6667ZM4.89333 9.33333H16.8824V10.6667H4.89333V9.33333Z" fill="black" />
                              </svg>
                           </div>
                           <div className="content-counter__value">
                              1
                           </div>
                           <div className="content-counter__plus">
                              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10.8305 0C11.7476 0 12.6322 0.117188 13.4843 0.351562C14.3364 0.585938 15.13 0.924479 15.865 1.36719C16.6 1.8099 17.2732 2.33073 17.8846 2.92969C18.496 3.52865 19.0196 4.20247 19.4554 4.95117C19.8912 5.69987 20.2262 6.4974 20.4604 7.34375C20.6945 8.1901 20.8149 9.07552 20.8214 10C20.8214 10.918 20.7043 11.8034 20.4701 12.6562C20.236 13.5091 19.8977 14.3034 19.4554 15.0391C19.0131 15.7747 18.4928 16.4486 17.8944 17.0605C17.2959 17.6725 16.6227 18.1966 15.8747 18.6328C15.1267 19.069 14.3299 19.4043 13.4843 19.6387C12.6387 19.873 11.7541 19.9935 10.8305 20C9.91336 20 9.02875 19.8828 8.17666 19.6484C7.32457 19.4141 6.52777 19.0788 5.78626 18.6426C5.04475 18.2064 4.37154 17.6855 3.76662 17.0801C3.1617 16.4746 2.64134 15.7975 2.20554 15.0488C1.76974 14.3001 1.43476 13.5059 1.2006 12.666C0.966437 11.8262 0.846104 10.9375 0.8396 10C0.8396 9.08203 0.95668 8.19661 1.19084 7.34375C1.425 6.49089 1.76324 5.69661 2.20554 4.96094C2.64785 4.22526 3.16821 3.55143 3.76662 2.93945C4.36503 2.32747 5.03825 1.80339 5.78626 1.36719C6.53428 0.93099 7.33108 0.595703 8.17666 0.361328C9.02224 0.126953 9.90685 0.00651042 10.8305 0ZM10.8305 18.75C11.637 18.75 12.4111 18.6458 13.1526 18.4375C13.8941 18.2292 14.5901 17.9362 15.2405 17.5586C15.891 17.181 16.4796 16.7253 17.0065 16.1914C17.5334 15.6576 17.9887 15.0684 18.3724 14.4238C18.7562 13.7793 19.0522 13.0827 19.2603 12.334C19.4684 11.5853 19.5725 10.8073 19.5725 10C19.5725 9.19271 19.4684 8.41797 19.2603 7.67578C19.0522 6.93359 18.7595 6.23698 18.3822 5.58594C18.0049 4.9349 17.5496 4.3457 17.0163 3.81836C16.4829 3.29102 15.8942 2.83529 15.2503 2.45117C14.6063 2.06706 13.9104 1.77083 13.1623 1.5625C12.4143 1.35417 11.637 1.25 10.8305 1.25C10.0239 1.25 9.2499 1.35417 8.50839 1.5625C7.76688 1.77083 7.0709 2.0638 6.42045 2.44141C5.77 2.81901 5.18134 3.27474 4.65448 3.80859C4.12762 4.34245 3.6723 4.93164 3.28854 5.57617C2.90477 6.2207 2.60882 6.91732 2.40068 7.66602C2.19253 8.41471 2.08846 9.19271 2.08846 10C2.08846 10.8073 2.19253 11.582 2.40068 12.3242C2.60882 13.0664 2.90152 13.763 3.27878 14.4141C3.65604 15.0651 4.11136 15.6576 4.64472 16.1914C5.17809 16.7253 5.76675 17.181 6.41069 17.5586C7.05464 17.9362 7.75062 18.2292 8.49863 18.4375C9.24665 18.6458 10.0239 18.75 10.8305 18.75ZM11.4549 9.36523H15.8259V10.6152H11.4549V15H10.2061V10.6152H5.83504V9.36523H10.2061V5H11.4549V9.36523Z" fill="black" />
                              </svg>
                           </div>
                           <div className="content-counter__initialprice">$ 650</div>

                        </div>
                        <div className="content-basket__cross">
                           <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.756 9L18.7001 16.9629L17.6639 18L9.70834 10.0487L1.75274 18L0.716553 16.9629L8.66064 9L0.716553 1.03713L1.75274 0L9.70834 7.95134L17.6639 0L18.7001 1.03713L10.756 9Z" fill="#CFCFCF" />
                           </svg>
                        </div>
                     </div>
                     {/* <div className="sidebar__line">
                        <svg preserveAspectRatio="none" width="444.5" height="1" viewBox="0 0 410 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line x1="4.37114e-08" y1="0.5" x2="410" y2="0.500036" stroke="#CFCFCF" />
                        </svg>
                     </div> */}
                  </div>
                  <div className="content__receipt">
                     <div className="receipt__content-subtotal">
                        <div className="content-subtotal__title">Subtotal</div>
                        <div className="content-subtotal__price">$1 050</div>
                     </div>
                     <div className="receipt__content-tax">
                        <div className="content-tax__title">Tax</div>
                        <div className="content-tax__price">$100</div>
                     </div>
                     <div className="receipt__content-shipping">
                        <div className="content-shipping__title">Shipping</div>
                        <div className="content-shipping__price">$150</div>
                     </div>
                     <div className="receipt__content-total">
                        <div className="content-total__title">Total</div>
                        <div className="content-total__price">$1 300</div>
                     </div>
                  </div>
               </div>
            </div>

         </div> : <div onClick={burgerHandler} className='header__burger'><span /></div>}
      </>
   )
}



{/* <div onClick={burgerHandler} className="header__burger">
         <span/>
      </div>); */}

export default Burger;