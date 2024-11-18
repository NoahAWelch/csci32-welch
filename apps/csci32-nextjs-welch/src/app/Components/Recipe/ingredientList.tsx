import { Flex } from '@repo/ui/flex'
import { Tag } from '@repo/ui/tag'
import { useContext } from 'react'
import { RecipeContext } from './../../context/recipeContext'
import { Variants } from '@repo/ui/variant'

export function IngredientList() {
  const { ingredients, removeIngredient } = useContext(RecipeContext)

  return (
    <Flex className="gap-4 bg-blue-300">
      {ingredients.map((ingredient, index) => (
        <Tag key={index} variant={Variants.TertiaryReview} onClickX={() => removeIngredient(ingredient)}>
          {ingredient}
        </Tag>
      ))}
    </Flex>
  )
}
