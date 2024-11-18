import { RecipeForm } from './RecipeForm'
import { RecipeContext } from '../../context/recipeContext'
import { Wrapper } from '@repo/ui/wrapper'
import { Flex } from '@repo/ui/flex'
import { useContext } from 'react'
import { Button } from '@repo/ui/button'
import { Variants } from '@repo/ui/variant'
import { Header } from '@repo/ui/header'
import React from 'react'
import RecipeSearch from './recipeSearch'
import RecipeResults from './RecipeResults'

export default function RecipeHome() {
  const { showRecipeForm, setShowRecipeForm } = useContext(RecipeContext)
  return (
    <Wrapper>
      <Flex className=" items-center w-full justify-between">
        <Header variant="h1">Welcome to RecipeStacker</Header>
        <Button
          variant={Variants.Tertiary}
          onClick={() => {
            setShowRecipeForm(!showRecipeForm)
          }}
        >
          {showRecipeForm ? 'Search Recipes' : 'Create Recipe'}
        </Button>
      </Flex>

      <Flex className="flex-col gap-y-8 mt-8">
        {showRecipeForm ? (
          <RecipeForm />
        ) : (
          <>
            <RecipeSearch />
            <RecipeResults />
          </>
        )}
      </Flex>
    </Wrapper>
  )
}
