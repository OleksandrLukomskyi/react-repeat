import clsx from 'clsx'
import { FaBeer } from 'react-icons/fa';
import { BsAndroid2 } from "react-icons/bs";

import css from './Payment.module.css'

export const Payment = ({
  data: {amount, description, cardType, date, cardNumber, cardOwner, isPaid

  }}) => {

    const containerClass = clsx(
      css.container, 
      isPaid ? css.isPaid : css.isPending
    )

   return (
     <div className={clsx(containerClass)}>
      <FaBeer className={css.icon} />
      <BsAndroid2 />
   <p>Amount: {amount}</p>
   <p>
    Status: {isPaid ? "Paid" : "Pending"} {amount}$
   </p>
   <p>Description: {description}</p>
   <p>Card Number:{cardNumber} </p>
   <p>Card Type: {cardType}</p>
   <p>Card Holder Name: {cardOwner} </p>
   <p>Payment Date:{date} </p>
 </div>

   )
 }