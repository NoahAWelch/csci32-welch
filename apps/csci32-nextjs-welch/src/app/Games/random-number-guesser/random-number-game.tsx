'use client'
import { Button } from '../../../../../../packages/ui/src/button'
import { FormEventHandler, useState } from 'react'
import { GuessingGameEngineProps } from './page'
import Input from '../../../../../../packages/ui/src/input'
import { Variants } from '../../../../../../packages/ui/src/variant'

export default function RandomNumberGame({ randomNumber, endGame, maxGuessCount }: GuessingGameEngineProps) {
  const [guessCount, setGuessCount] = useState(0)
  const [feedBack, setFeedBack] = useState('')
  const [guess, setGuess] = useState(0)
  const [hasWon, setGameOver] = useState(false)
  const [lose, gameOverLoss] = useState(false)
  const [win, gameOverWin] = useState(false)

  function submitGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newGuessCount = guessCount + 1
    if (guess < randomNumber) {
      setFeedBack('Higher')
    } else if (guess > randomNumber) {
      setFeedBack('Lower')
    } else {
      setFeedBack(`You won the game with ${newGuessCount} guesses left! The number was ${randomNumber}`)
      setGameOver(true)
      gameOverLoss(false)
      gameOverWin(true)
    }
    setGuessCount(newGuessCount)
    if (newGuessCount === maxGuessCount && !hasWon) {
      setFeedBack(`You lose! The number was ${randomNumber}.`)
      setGameOver(true)
      gameOverLoss(true)
      gameOverWin(false)
    }
  }

  function onSubmitEndGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGuessCount(0)
    setFeedBack('')
    setGameOver(false)
    endGame()
  }
  return (
    <div
      className={`${maxGuessCount - 1 === guessCount ? 'bg-red-400' : ''} ${maxGuessCount === guessCount ? 'bg-red-800' : ''} ${win ? '!bg-green-500' : lose ? 'bg-red-800' : ''} p-10 rounded-lg transition-color`}
    >
      {hasWon ? (
        <form>
          <div className="text-black">{feedBack}</div>
          <Button>end game</Button>
        </form>
      ) : (
        <form onSubmit={submitGuess}>
          <Input
            name="guess"
            id="guess"
            type="number"
            placeholder="Enter"
            value={guess}
            variant={Variants.Primary}
            setValue={(newValue) => setGuess(Number(newValue))}
          />

          <div>{feedBack}</div>
          <div>you have guessed {guessCount} times</div>
          <div>you have {maxGuessCount - guessCount} left</div>
          <Button>lucky guess</Button>
        </form>
      )}
    </div>
  )
}
