import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'; // Import your CSS file for styling

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCurrencyChange = (newCurrency) => {
    // Dispatch an action to change the currency
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    setIsDropdownOpen(false);
  };

  return (
    <div className={`currency-container ${isDropdownOpen ? 'open' : ''}`}>
      <div
        className='selected-currency'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Currency ({getCurrencyLabel(currency)}){' '}
        {isDropdownOpen ? '▲' : '▼'} {/* Unicode arrow symbols */}
      </div>
      {isDropdownOpen && (
        <div className='options'>
          {getCurrencies().map((option) => (
            <div
              key={option.value}
              className='option'
              onClick={() => handleCurrencyChange(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const getCurrencies = () => [
  { value: '$', label: '$ Dollar' },
  { value: '£', label: '£ Pound' },
  { value: '€', label: '€ Euro' },
  { value: '₹', label: '₹ Ruppee' },
];

const getCurrencyLabel = (currency) => {
  const selectedCurrency = getCurrencies().find((c) => c.value === currency);
  return selectedCurrency ? selectedCurrency.label : '';
};

export default Currency;
