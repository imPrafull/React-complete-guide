import { useState } from "react"

import Header from "./components/Header"
import InputGroup from "./components/InputGroup"
import Results from "./components/Results"

function App() {

  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = userInput.duration >= 1

  function handleInputChange(inputId, newValue) {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputId]: +newValue
          }
      })
  }
  
  return (
    <>
      <Header />
      <InputGroup onInputChange={handleInputChange} userInput={userInput} />
      {inputIsValid && <Results input={userInput} />}
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    </>
  )
}

export default App
