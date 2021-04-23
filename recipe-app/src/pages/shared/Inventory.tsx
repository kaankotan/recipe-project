import React, { useState } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import './styles/inventory.css'
import Header from './header';
import { useStateValue } from '../../StateProvider';


export const Inventory = () => {

    const [{ item },] = useStateValue()

    const [inputValue, setInputValue] = useState('');

    const [items, setItems] = useState([
        { itemName: 'Buy carrot', quantity: 1, isSelected: false },
    ])

    const [totalItemCount, setTotalItemCount] = useState(1);


    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
    };


    const toggleComplete = (index: any) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);

        calculateTotal();
    };

    const handleQuantityIncrease = (index: any) => {
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems);

        calculateTotal();
    };

    const handleQuantityDecrease = (index: any) => {
        const newItems = [...items];

        newItems[index].quantity--;

        setItems(newItems);

        calculateTotal();
    };

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setTotalItemCount(totalItemCount);
    };






    return (
        <>
            <Header />
            <div className="inventory">
                <div className="inventory__container">
                    <div className='add-item-box'>
                        <input className='add-item-input' placeholder='Add an item...' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                        <IconButton onClick={() => handleAddButtonClick()} >
                            <AddIcon fontSize="large" />
                        </IconButton>


                    </div>

                    <div className='item-list'>
                        {items.map((item, index) => (
                            <div className='item-container'>
                                <div className='item-name' onClick={() => toggleComplete(index)}>
                                    {item.isSelected ? (
                                        <>
                                            <CheckCircleIcon />
                                            <span className='completed'>{item.itemName}</span>

                                        </>
                                    ) : (
                                        <>
                                            <RadioButtonUncheckedIcon />
                                            <span>{item.itemName}</span>

                                        </>
                                    )}
                                </div>
                                <div className='quantity'>
                                    <button>
                                        <IconButton onClick={() => handleQuantityDecrease(index)}>
                                            <ChevronLeftIcon />
                                        </IconButton>
                                    </button>
                                    <span> {item.quantity} </span>
                                    <button>
                                        <IconButton onClick={() => handleQuantityIncrease(index)}>
                                            <ChevronRightIcon />
                                        </IconButton>
                                    </button>

                                </div>
                                <button>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='total'>Total: {totalItemCount}</div>

                </div>
            </div>
        </>
    )
}