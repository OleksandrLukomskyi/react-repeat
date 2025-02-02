import { PaymentList } from "../PaymentList/PaymentList";
import payments1 from "../../payments1.json";
import payments2 from "../../payments2.json";
import { PageTitle } from "../PageTitle/PageTitle";
import { Button } from "../Button/Button";



export const App = () => {
  return (
    <>
    <PageTitle >Payments</PageTitle>

    
   <Button variant='primary'>Click me</Button>

   <Button variant='secondary'>Click me</Button>

    <h2>Payments1</h2>
      <PaymentList  payments={payments1}/>

      <h2>Payments2</h2>
      <PaymentList payments={payments2}/>
    </>
  );
};
