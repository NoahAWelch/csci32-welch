import { Field } from '@repo/ui/field'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
import { Label } from '@repo/ui/label'
import Input from '@repo/ui/input'
import { IngredientList } from './ingredientList'
import { RecipeContext } from '../../context/recipeContext'
import { useContext } from 'react'

export default function RecipeSearch() {
  const { setIngredients, setRecipeNameQuery, ingredients } = useContext(RecipeContext)
  return (
    <>
      <Header className="justify-between">Search Recipes</Header>
      <Flex className="flex-col gap-y-2">
        <Field>
          <Label>Ingredients</Label>
          <Input
            name="ingredient-search-query"
            id="ingredient-query"
            //setValue={setIngredients}
            onEnter={(newIngredient) => {
              setIngredients([...ingredients, newIngredient])
            }}
          />
        </Field>

        <IngredientList />
        <Field>
          <Label>Recipe name</Label>
          <Input
            name="Recipe-name-query"
            id="recipe-search"
            // setValue
            onEnter={(recipeNameQuery) => setRecipeNameQuery(recipeNameQuery)}
          />
        </Field>
      </Flex>
    </>
  )
}
