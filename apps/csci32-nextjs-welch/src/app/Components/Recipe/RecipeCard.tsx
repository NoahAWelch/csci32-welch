import { Button } from '@repo/ui/button'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
import { IngredientMeasurement } from '../../context/recipeContext'
import { Variants } from '@repo/ui/variant'
import { Sizes } from '@repo/ui/size'

export type RecipeCardProps = {
  recipe_id: string
  name: string | null
  description: string | null
  ingredient_measurements: IngredientMeasurement[] | null
}

export default function RecipeCard({ name, description, ingredient_measurements }: RecipeCardProps) {
  return (
    <div className="border-2 border-solid border-purple-500 rounded-xl shadow-lg basis-1/4 min-w-48 bg-blue-300 flex-grow">
      <Flex className="justify-between p-2 gap-2 flex-wrap rounded-lg">
        <Header>{name}</Header>
        <Flex className="gap-2 ">
          <Button size={Sizes.Medium} variant={Variants.Primary} onClick={() => alert('UPDATE NOT IMPLEMENTED')}>
            Update
          </Button>

          <Button size={Sizes.Medium} variant={Variants.Primary} onClick={() => alert('DELETE NOT IMPLEMENTED')}>
            Delete
          </Button>
        </Flex>
      </Flex>
      <div className="rounded-lg">
        <p>{description}</p>
        <ul>
          {ingredient_measurements?.map(({ quantity, unit, ingredient }, index) => {
            return (
              <li key={index}>
                {ingredient.name} {quantity} {unit}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}