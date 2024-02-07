import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,dispatch,currency } = useContext(AppContext);
    
    const [newBudget, setNewBudget] = useState(budget);


    const handleBudgetChange = (event) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return total + item.cost;
        }, 0);

        if (event.target.value > 20000) {
            alert("Your budget cannot be greater than 20,000");
            return;
        }
        else if (event.target.value < totalExpenses) {
            alert("Budget cannot be lower than your expenses.");
            return;
        }
        else{
            setNewBudget(event.target.value);
            dispatch(
                { 
                    type: 'SET_BUDGET',
                    payload: newBudget 
                });
        }}
        
    
    return (
<div className='alert alert-secondary' style={{ display: 'flex', alignItems: 'center' }}>
<span >Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>

    );
};
export default Budget;
