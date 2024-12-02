import { useState } from 'react'
import { InputBox } from './Component'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)

  const option = Object.keys(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-center w-100 py-3" style={{ backgroundImage: `url(https://images.pexels.com/photos/26629914/pexels-photo-26629914/free-photo-of-rainbow-international-bridge-in-niagara-falls-in-canada.jpeg?auto=compress&cs=tinysrgb&w=600)`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="container shadow-3 w-100">
          <div className="w-50 mx-auto border-1 bg-seconary p-2">
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }} className='py-3 px-3 blur1'>
              <div className="w-100 mb-1">
                <InputBox label="From" amount={amount} currencyOptions={option} onCurrencyChange={(currency) => setAmount(amount)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} />
              </div>
              <div className="position-relative d-flex justify-content-center my-3 align-items-center w-100">
                <button type="button" onClick={swap} className='border-2 center btn btn-primary text-light px-2 py-1 rounded-2 d-flex justify-content-center align-items-center'>
                  swap
                </button>
              </div>
              <div className="w-100 mb-4 mt-1">
                <InputBox label="to" amount={convertedAmount} currencyOptions={option} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={from} amountDisable={true} />
              </div>
              <div className="d-flex pb-2 justify-content-center align-items-center">
                <button type="submit" className='w-50 bg-primary text-light px-1 py-3 rounded-3 '>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
