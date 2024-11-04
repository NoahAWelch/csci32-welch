'use client'
import { Button } from '../../../../../../packages/ui/src/button'
import { GuessingGameMenuProps } from './page'
import { FormEventHandler, useState } from 'react'
import Variants from '../../../../../../packages/ui/src/input'
import { Input } from '../../../../../../packages/ui/src/input'

export default function RandomNumberGameMenu({ startGame }: GuessingGameMenuProps) {
  const [settings, gameSettings] = useState(false)

  function onSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const min = Number(data.get('minimum'))
    const max = Number(data.get('maximum'))
    const maxGuessCount = Number(data.get('maxGuessCount'))

    startGame({ min, max, maxGuessCount })
    gameSettings(false)
  }

  return (
    <div className="flex flex-col gap-4">
      {settings ? (
        <div className="flex flex-col gap-4 rounded-lg bg-gray-500">
          <header>
            <h1 className="text-2xl font-bold">please enter your min number guess</h1>
          </header>
          <form className="flex flex-col gap-4 bg-gray-500 py-2" onSubmit={onSubmitSettings}>
            <Input defaultValue={0} type="number" placeholder={'Minimum guessing value'} name="minimum" id="minimum" />
            <h2 className="text-2xl font-bold">and max number guess</h2>
            <Input defaultValue={10} type="number" placeholder={'Maximum guessing value'} name="maximum" id="maximum" />
            <h3 className="text-2xl font-bold">and enter the number of guesses you want to have.</h3>
            <Input
              defaultValue={3}
              type="number"
              placeholder={'All guesses consumed'}
              name="maxGuessCount"
              id="maxGuessCount"
            />

            <Button className="">Submit</Button>
          </form>
        </div>
      ) : (
        <div className="flex-flex-col min-h-screen min-w-full text-black gap-4 bg-gray-500">
          <header className="flex-flex-col gap-4 bg-gray-300 text-center">
            <h1 className="text-2xl font-bold p-2">Welcome! to the guessing game</h1>
            <p>Are you ready to play</p>
            <p className="p-2">the guessing game!</p>
          </header>
          <form
            className="text-3xl border rounded-xl shadow-lg bg-blue-500 flex justify-center p-12 m-48"
            onSubmit={(e) => {
              e.preventDefault()
              gameSettings(true)
            }}
          >
            <Button className="shadow-xxl bg-blue-700 transition-all hover:scale-110">START</Button>
          </form>
        </div>
      )}
    </div>
  )
}
