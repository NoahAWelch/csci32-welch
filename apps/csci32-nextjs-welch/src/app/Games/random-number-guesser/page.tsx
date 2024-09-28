'use client'
import { Button } from '../../../../../../packages/ui/src/button'
import { useState } from 'react'
import RandomIntegerGame from './random-number-game'
import RandomNumberGameMenu from './random-number-game-menu'
import { getRandomInteger } from '../../../../../../packages/math/src/getRandomInteger'

export interface StartingProps {
  min: number
  max: number
  maxGuessCount: number
}
export interface GuessingGameMenuProps {
  startGame: (props: StartingProps) => void
}
export interface GuessingGameEngineProps {
  randomNumber: number
  maxGuessCount: number
  endGame: () => void
}
export default function RandomNumberGuesser() {
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [randomNumber, setRandomNumber] = useState(0)
  const [maxGuessCount, setMaximumGuessCount] = useState(0)

  function startGame({ min, max, maxGuessCount }: StartingProps) {
    const newRandomNumber = getRandomInteger({ min, max })
    setRandomNumber(newRandomNumber)
    setMaximumGuessCount(maxGuessCount)
    setIsGameRunning(true)
  }
  function endGame() {
    setIsGameRunning(false)
  }
  return (
    <div className="p-12 max-w-[800px] m-auto">
      {isGameRunning ? (
        <RandomIntegerGame endGame={endGame} randomNumber={randomNumber} maxGuessCount={maxGuessCount} />
      ) : (
        <RandomNumberGameMenu startGame={startGame} />
      )}
    </div>
  )
}
