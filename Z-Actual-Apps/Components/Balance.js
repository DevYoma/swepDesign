import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState'

const Balance = () => {
    //global context
    const {transactions} = useContext(GlobalContext);

    //getting the amounts in a single array 2b able to perform array methods easily...
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((accumulator, item) => (accumulator + item), 0).toFixed(2)
    // console.log(total);
    
    return ( 
        <div className="balance">
            <p>YOUR BALANCE</p>
            <h1>${total}</h1>
        </div>
     );
}
 
export default Balance;