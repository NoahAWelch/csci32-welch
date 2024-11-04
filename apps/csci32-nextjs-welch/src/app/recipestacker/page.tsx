'use client'
import RecipeHome from '../Components/Recipe/RecipeHome'
import { RecipeProvider } from '../context/recipeContext'

export default function Home() {
  return (
    <RecipeProvider>
      <RecipeHome />
    </RecipeProvider>
  )
}
