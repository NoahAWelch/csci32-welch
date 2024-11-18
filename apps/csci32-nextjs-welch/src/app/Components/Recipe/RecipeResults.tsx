import { Flex } from '@repo/ui/flex'
import { useContext } from 'react'
import { RecipeContext } from '../../context/recipeContext'
import RecipeCard from './RecipeCard'

export default function RecipeResults() {
  const { recipes } = useContext(RecipeContext)

  return (
    <Flex className="gap-2 flex-wrap">
      {recipes?.map(({ recipe_id, name, description, ingredient_measurements }) => (
        <RecipeCard
          key={recipe_id}
          recipe_id={recipe_id}
          description={description}
          name={name}
          ingredient_measurements={ingredient_measurements}
        />
      ))}
    </Flex>
  )
}
