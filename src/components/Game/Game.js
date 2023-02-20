import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GuessFinal from '../GuessFinal';

// Pick a random word on every pageload.
const answer = sample(WORDS)
console.log(answer)

function Game() {
  const [results, setResults] = React.useState([])
  const [isWinner, setIsWinner] = React.useState(false)

  const addResult = (result) => {
    if (result === answer) {
      setIsWinner(true)
      return
    }

    if (results.length < NUM_OF_GUESSES_ALLOWED) {
      const guess = checkGuess(result, answer)
      if (guess) {
        setResults([...results, guess])
      }
    }
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput
        addResult={addResult}
        disabled={results.length >= NUM_OF_GUESSES_ALLOWED}
      />

      {isWinner && (
        <GuessFinal status='happy'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {results.length === 1 ? '1 guess' : `${results.length} guesses`}
            </strong>
            .
          </p>
        </GuessFinal>
      )}

      {results.length === NUM_OF_GUESSES_ALLOWED && !isWinner && (
        <GuessFinal status='sad'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </GuessFinal>
      )}
    </>
  )
}

export default Game;
