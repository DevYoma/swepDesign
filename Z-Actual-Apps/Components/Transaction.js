import React, { useContext } from 'react';
import {GlobalContext } from '../Context/GlobalState'

const Transaction = ({transaction}) => {
    
    const {deleteTransaction} = useContext(GlobalContext);

    //checking for the sign...
    const sign = transaction.amount < 0 ? '-' : '+';
    //styling the right border
    
    return ( 
        <div onClick={() => deleteTransaction(transaction.id)} className={transaction.amount > 0 ? 'transaction__plus' : 'transaction__minus'}>
            <span>{transaction.text}</span>
            <span>{sign}${Math.abs(transaction.amount)}</span>
        </div>
     );
}
 
export default Transaction;