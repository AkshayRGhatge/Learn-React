import { useState } from 'react'
import useCurrencyConvertor from './hooks/useCurrencyConvertor'
import InputBox from './components/InputBox'

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [fromAmount,setFromAmount]=useState(0)
  const [toAmount,setToAmount]=useState(0)
  
  const currencyData=useCurrencyConvertor(fromCurrency);
  const currencyOption=Object.keys(currencyData);

  const currencyConvertor = ()=>{
      setToAmount(fromAmount * currencyData[toCurrency])
  }

  return (
    <div>
        <form onSubmit={
            (e)=>{
              e.preventDefault();
              currencyConvertor();
            }
        }>

            <InputBox
                label="From"
                amount={fromAmount}
                currencyOption={currencyOption}
                selectCurrency={fromCurrency}
                onAmountChange={(amount)=>setFromAmount(amount)}
                onCurrencyChange={(currency)=>setFromCurrency(currency)}
            
            />

            <InputBox   
                label="To"
                amount={toAmount}
                currencyOption={currencyOption}
                selectCurrency={toCurrency}
                onAmountChange={(amount)=>setToAmount(amount)}
                onCurrencyChange={(currency)=>setToCurrency(currency)}

            />
            <button>
              Convert {fromCurrency} to {toCurrency}
            </button>
        </form>
    </div>
  )
}

export default App
