'use client'
import Input from '@repo/ui/input'
import { Button } from '../../../../../packages/ui/src/button'
import { Sizes } from '../../../../../packages/ui/src/size'
import { Variants } from '../../../../../packages/ui/src/variant'
import { useState } from 'react'
import Navbar from '../Components/Navbar'

export default function ButtonProps() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')
  return (
    <div className="p-12 bg-gray-800">
      <Navbar />
      <div className="flex gap-2 flex-wrap flex-col min-w-screen min-h-screen border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
        <div className="flex gap-2 justify-center py-12">
          <Input
            value={name}
            setValue={setName}
            size={Sizes.Medium}
            variant={Variants.Primary}
            name="name"
            id="number"
          />
          <Button onClick={() => alert(`Enter your name: ${name}`)} size={Sizes.Medium} variant={Variants.Primary}>
            Name
          </Button>
        </div>
        <div className="flex gap-2 justify-center py-12">
          <Input
            value={date}
            setValue={setDate}
            size={Sizes.Medium}
            variant={Variants.Secondary}
            name="name"
            id="number"
          />
          <Button onClick={() => alert(`Date you read book: ${date}`)} size={Sizes.Medium} variant={Variants.Secondary}>
            {' '}
            Date
          </Button>
        </div>

        <div className="flex gap-2 justify-center py-12">
          <Input
            value={rating}
            setValue={setRating}
            size={Sizes.Medium}
            variant={Variants.Tertiary}
            name="name"
            id="number"
          />
          <Button
            onClick={() => alert(`Rating for your book: ${rating}`)}
            size={Sizes.Medium}
            variant={Variants.Tertiary}
          >
            {' '}
            Rating
          </Button>
        </div>
        <div className="flex gap-2 justify-center py-12">
          <Input
            value={review}
            setValue={setReview}
            size={Sizes.Medium}
            variant={Variants.TertiaryReview}
            name="name"
            id="number"
          />

          <div className="min-h-48">
            <Button
              onClick={() => alert(`Rating for your book: ${review}`)}
              size={Sizes.Medium}
              variant={Variants.TertiaryReview}
            >
              {' '}
              Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
