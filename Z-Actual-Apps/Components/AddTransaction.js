import React, { useState, useContext } from 'react';
import {GlobalContext} from '../Context/GlobalState'

const AddTransaction = () => {

    const [text, setText] = useState('');

    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onsubmit = e => {
        e.preventDefault();

        //new transaction object
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000 ),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction)
        setText('')
        setAmount(0)
    }

    return ( 
        <form onSubmit={onsubmit} className="Add__Transaction">
            <h3>Add Transaction</h3>
            <hr></hr>
            <p>Text</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} required placeholder="Enter Text..." />
            <p>Amount</p>
            <p>(negative - expense, positive - income)</p>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="Enter Amount..." />
            <button className="addTransaction__button">+</button>
        </form>
     );
}
 
export default AddTransaction;