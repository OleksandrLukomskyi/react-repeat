import { PaymentList } from "./PaymentList";
import payments1 from "../payments1.json";
import payments2 from "../payments2.json";


export const App = () => {
  return (
    <>

    <h2>Payments1</h2>
      <PaymentList  payments={payments1}/>

      <h2>Payments2</h2>
      <PaymentList payments={payments2}/>
    </>
  );
};
