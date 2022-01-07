import React, { useContext } from 'react';
import {GlobalContext} from '../Context/GlobalState'

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    // getting the total imcome from the amount array
    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc + item), 0)

    //getting total EXPENSES from amount array
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc + item), 0);
    
    // console.log(income);
    
    return ( 
        <div className="income__expense">
            <div className="income">
                <p>INCOME</p>
                <h3>${income}</h3>
            </div>
            
            <div className="expense">
                <p>EXPENSE</p>
                <h3>${expense}</h3>
            </div>
    </div>
     );
}
 
export default IncomeExpense;