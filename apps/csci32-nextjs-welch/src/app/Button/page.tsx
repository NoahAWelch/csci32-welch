import Image from 'next/image'
import Navbar from '../Components/Navbar'
import PageTitle from '../Components/PageTitle'
import React from 'react'
import Footer from '../Components/Footer'
import { Button } from '../../../../../packages/ui/src/button'
import { Sizes } from '../../../../../packages/ui/src/size'
import { Variants } from '../../../../../packages/ui/src/variant'

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-2 m-2 ">
      <Navbar />
      <div className="flex gap-2">
        <Button size={Sizes.Small} variant={Variants.Primary}>
          Primary
        </Button>
        <Button size={Sizes.Medium} variant={Variants.Primary}>
          Primary
        </Button>
        <Button size={Sizes.Large} variant={Variants.Primary}>
          Primary
        </Button>
      </div>
      <div className="flex gap-2">
        <Button size={Sizes.Small} variant={Variants.Secondary}>
          Secondary
        </Button>
        <Button size={Sizes.Medium} variant={Variants.Secondary}>
          Secondary
        </Button>
        <Button size={Sizes.Large} variant={Variants.Secondary}>
          Secondary
        </Button>
      </div>
      <div className="flex gap-2">
        <Button size={Sizes.Small} variant={Variants.Tertiary}>
          Tertiary
        </Button>
        <Button size={Sizes.Medium} variant={Variants.Tertiary}>
          Tertiary
        </Button>
        <Button size={Sizes.Large} variant={Variants.Tertiary}>
          Tertiary
        </Button>
      </div>
    </div>
  )
}
