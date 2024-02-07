import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import plus and minus icons
import { AppContext } from '../context/AppContext';
import './button.css';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button className="increase-btn" onClick={() => increaseAllocation(props.name)}>
                    <FaPlus size='1.0em' color='white' />
                </button>
            </td>
            <td>
                <button className="decrease-btn" onClick={() => decreaseAllocation(props.name)}>
                    <FaMinus size='1.0em' color='white' />
                </button>
            </td>
            <td>
            <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
