import React from 'react'
import GuessChar from '../GuessChar'

function GuessResults ({ results = [] }) {
  return (
    <>
      <div className="guess-results">
        {results.map((guess, index) => (
          <GuessChar key={`guess-${index}`} guessId={index} guess={guess} />
        ))}
      </div>
    </>
  )
}

export default GuessResults
