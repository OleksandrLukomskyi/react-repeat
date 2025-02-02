import { Payment } from "../Payment/Payment"
import css from './PaymentList.module.css'

export const PaymentList = ({payments}) => {
   console.log(payments);
   return (
   <ul className={css.list}>
   {payments.map((payment) => (
       <li key={payment.id}>
         <Payment data={payment}/>
       </li>
     ))
   }
  </ul>
  )
}