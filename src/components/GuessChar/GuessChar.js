import React from 'react'

function GuessChar({ guessId, guess }) {
  return (
    <p className="guess">
      {guess.map((char, index) => (
        <span
          key={`${guessId}-${char.letter}-${index}`}
          className={`cell ${char.status}`}
        >
          { char.letter }
        </span>
      ))}
    </p>
  );
}

export default GuessChar
