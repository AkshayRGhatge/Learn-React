function InputBox({
    label,
    amount,
    currencyOption=[],
    selectCurrency="usd",
    onAmountChange,
    onCurrencyChange
})
{
    return (
        <div>
            <label>{label}</label>
            <input 
                type="text" 
                value={amount}
                onChange={(e)=>onAmountChange && Number(onAmountChange(e.target.value))}
            >
            </input>
            <select 
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            >
    
                 {currencyOption.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
            </select>
        </div>
    );

}

export default InputBox