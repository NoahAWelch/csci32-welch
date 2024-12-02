'use client'
import RecipeHome from '../Components/Recipe/RecipeHome'
//import AuthorHome from '../Components/Books/BookHome'
import { RecipeProvider } from '../context/recipeContext'

export default function Home() {
  return (
    <RecipeProvider>
      <RecipeHome />
    </RecipeProvider>
  )
}
