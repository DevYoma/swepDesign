import React, { useContext } from 'react';
import {GlobalContext} from '../Context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

    const {transactions, clearTransactions} = useContext(GlobalContext)
    console.log(transactions);

    return ( 
        <React.Fragment>
            <div className="transaction__history">
            <h3>History</h3> 
            {/* conditionally rendering the button element */}
            {transactions.length ? (<button onClick={() => clearTransactions(transactions)}>Clear List</button>) : (<p>No Transaction yet</p>)}
            <hr className="horizontal__line"></hr>
            <div className="transaction__list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}

                
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default TransactionList;