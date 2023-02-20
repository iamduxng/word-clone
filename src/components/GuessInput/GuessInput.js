import React from 'react'

function GuessInput ({ disabled, addResult = () => {} }) {
  const [guess, setGuess] = React.useState('')

  const submitGuess = (e) => {
    e.preventDefault()
    addResult(guess)
    setGuess('')
  }

  return (
    <form onSubmit={submitGuess} className="guess-input-wrapper">
      <label htmlFor="input-guess">Enter guess:</label>
      <input
        type="text"
        id="input-guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
      />
    </form>
  )
}

export default GuessInput
