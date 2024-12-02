import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {

    const amountInputId = useId()

    return (
        <>
            <div className={`container d-flex p-1 w-100 bg-light rounded-3 ${className}`}>
                <div className="w-50">
                    <label htmlFor={amountInputId} className=' mb-2'>
                        {label}
                    </label>
                    <input type="number" id={amountInputId} className='w-100 py-3 text-dark rounded-2' placeholder='Amount' disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                </div>
                <div className="d-flex flex-wrap w-50 text-end py-3 ps-5">
                    <p className="text-dark pe-5 text-center shadow-3 d-flex align-items-center pt-3">Currency Type</p>
                    <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} className='rounded-1 d-flex justify-content-end bg-primary text-light text-center'>

                        {currencyOptions.map((currency) => (
                            <option value={currency} key={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox
