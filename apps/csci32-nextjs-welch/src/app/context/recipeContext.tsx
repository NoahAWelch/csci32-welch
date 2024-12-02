import React, { createContext, ReactNode, useState } from 'react'
import { useRecipes } from '../hook/useRecipes'

export type Ingredient = {
  ingredient_id?: string
  name: string
  description: string
}

export type IngredientMeasurement = {
  ingredient: Ingredient
  unit: string
  quantity: string
}

export type RecipeType = {
  recipe_id: string
  name: string
  description: string
  ingredient_measurements: IngredientMeasurement[]
}

export type RecipeContextType = {
  recipes: RecipeType[]
  mutate: () => void
  recipeNameQuery: string
  setRecipeNameQuery: (query: string) => void
  ingredients: string[]
  removeIngredient: (index: string) => void
  setIngredients: (ingredients: string[]) => void
  recipeId: string | null
  setRecipeId: (id: string | null) => void
  recipe: RecipeType | null
  setRecipe: (recipe: RecipeType | null) => void
  showRecipeForm: boolean
  setShowRecipeForm: (showRecipeForm: boolean) => void
}
const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  mutate: () => {},
  recipeNameQuery: '',
  setRecipeNameQuery: () => {},
  ingredients: [],
  removeIngredient: () => {},
  setIngredients: () => {},
  showRecipeForm: false,
  setShowRecipeForm: () => {},
  recipe: null,
  setRecipe: () => {},
  recipeId: null,
  setRecipeId: () => {},
})
const RecipeProvider = ({ children }: { children: ReactNode }) => {
  function removeIngredient(name: string) {
    const newIngredients = ingredients.filter((ingredient) => ingredient !== name)
    console.log('ingredients', newIngredients)
    setIngredients(newIngredients)
  }

  const [recipeId, setRecipeId] = useState<string | null>(null)
  const [recipe, setRecipe] = useState<RecipeType | null>(null)
  const [showRecipeForm, setShowRecipeForm] = useState(false)
  const [recipeNameQuery, setRecipeNameQuery] = useState('')
  const [ingredients, setIngredients] = useState<string[]>([])
  const { data: recipes, mutate } = useRecipes({ name: recipeNameQuery, ingredients: ingredients.join(',') })
  return (
    <RecipeContext.Provider
      value={{
        recipe,
        setRecipe,
        recipeId,
        setRecipeId,
        recipes,
        mutate,
        recipeNameQuery,
        setRecipeNameQuery,
        ingredients,
        removeIngredient,
        setIngredients,
        showRecipeForm,
        setShowRecipeForm,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
export { RecipeContext, RecipeProvider }
