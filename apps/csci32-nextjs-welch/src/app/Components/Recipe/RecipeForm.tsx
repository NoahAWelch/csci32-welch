import Input from '@repo/ui/input'
import { Flex } from '@repo/ui/flex'
import { Label } from '@repo/ui/label'
import { Field } from '@repo/ui/field'
import { FieldGroup } from '@repo/ui/fieldGroup'
import { useContext, useState } from 'react'
import { Button } from '@repo/ui/button'
import { getVariant, Variants } from '@repo/ui/variant'
import { Header } from '@repo/ui/header'
import { RecipeContext } from '../../context/recipeContext'
import { CreateRecipeProps, createRecipe } from '../../hook/useRecipes'

export function RecipeForm() {
  const { setShowRecipeForm } = useContext(RecipeContext)
  const [recipeFormData, setRecipeFormData] = useState({ name: '', description: '' })
  const [ingredientMeasurements, setIngredientMeasurements] = useState([
    {
      ingredient: {
        name: '',
        description: '',
      },
      unit: '',
      quantity: '',
    },
  ])
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const recipeName = data.get('recipe-name')
    const recipeDescription = data.get('recipe-description')
    const ingredient_measurements = []
    for (const key of data.keys()) {
      if (key.includes('ingredient-name')) {
        const ingredient_name = data.get(key) as string
        const unit = data.get(key.replace('ingredient-name', 'ingredient-unit')) as string
        const quantity = Number(data.get(key.replace('ingredient-name', 'ingredient-unit')))
        if (!ingredient_name || !unit || !quantity) {
          continue
        }
        ingredient_measurements.push({
          ingredient_name,
          unit,
          quantity,
        })
      }
    }
    if (typeof recipeName !== 'string' || typeof recipeDescription !== 'string') {
      return alert('Please fill out all fields!')
    }
    if (ingredient_measurements.length === 0) {
      return alert('Please add at least one ingredient!')
    }
    const recipeData: CreateRecipeProps = {
      name: recipeName,
      description: recipeDescription,
      ingredient_measurements,
    }
    await createRecipe(recipeData)
    setRecipeFormData({ name: '', description: '' })
    setShowRecipeForm(false)
    alert(`Your recipe ${recipeName} has been added`)
  }
  return (
    <div>
      <Header variant="h2">Create Recipes</Header>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <Label htmlFor="recipe-name">Recipe name</Label>
            <Input
              name="recipe-name"
              id="recipe-name"
              placeholder="Enter a recipe name"
              setValue
              value={recipeFormData.name}
              onChange={(newName) => {
                setRecipeFormData({ ...recipeFormData, name: newName })
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="recipe-description">Recipe description</Label>
            <Input
              name="recipe-description"
              id="recipe-description"
              placeholder="Enter a recipe description"
              value={recipeFormData.description}
              onChange={(newDescription) => {
                setRecipeFormData({ ...recipeFormData, description: newDescription })
              }}
            />
          </Field>
        </FieldGroup>
        {ingredientMeasurements.map(({ unit, quantity, ingredient }, index) => {
          return (
            <FieldGroup key={index} className="ml-4 bg-gray-200 shadow-md rounded-lg p-4">
              <Flex>
                <Label> ingredient {index + 1}</Label>
                {ingredientMeasurements.length > 1 && (
                  <Button
                    variant={Variants.TertiaryReview}
                    //className="bg-purple-600"
                    onClick={() => {
                      const newIngredientMeasurements = ingredientMeasurements.filter((item, idx) => index !== idx)
                      setIngredientMeasurements(newIngredientMeasurements)
                    }}
                  >
                    Remove{' '}
                  </Button>
                )}
              </Flex>

              <Input
                name={`ingredient-name-${index}`}
                value={ingredient.name}
                //variant={Variants.Secondary2}
                id={`ingredient-name-${index}`}
                onChange={(newIngredientName) => {
                  const newIngredientMeasurements = [
                    // take the ingredients before the current index
                    ...ingredientMeasurements.slice(0, index),
                    // update the ingredient at the current index
                    {
                      ...ingredientMeasurements[index],
                      ingredient: {
                        ...ingredientMeasurements[index]?.ingredient,
                        name: newIngredientName,
                        description: ingredientMeasurements[index]?.ingredient?.description ?? '',
                      },
                      unit: ingredientMeasurements[index]?.unit ?? '',
                      quantity: ingredientMeasurements[index]?.quantity ?? '',
                    },
                    // take the ingredients after the current index
                    ...ingredientMeasurements.slice(index + 1),
                  ]
                  setIngredientMeasurements(newIngredientMeasurements)
                }}
                placeholder="Enter an ingredient name"
              />

              <Input
                name={`ingredient-quantity-${index}`}
                value={quantity}
                variant={Variants.Secondary}
                id={`ingredient-quantity-${index}`}
                onChange={(newQuantity) => {
                  const newIngredientMeasurements = [
                    // take the ingredients before the current index
                    ...ingredientMeasurements.slice(0, index),
                    // update the ingredient at the current index
                    {
                      ...ingredientMeasurements[index],
                      ingredient: {
                        name: ingredientMeasurements[index]?.ingredient?.name ?? '',
                        description: ingredientMeasurements[index]?.ingredient?.description ?? '',
                      },

                      quantity: newQuantity,
                      unit: ingredientMeasurements[index]?.unit ?? '',
                    },
                    // take the ingredients after the current index
                    ...ingredientMeasurements.slice(index + 1),
                  ]
                  setIngredientMeasurements(newIngredientMeasurements)
                }}
                placeholder="Enter an ingredient quantity"
              />

              <Input
                name={`ingredient-unit-${index}`}
                value={unit}
                variant={Variants.Secondary}
                id={`ingredient-unit-${index}`}
                onChange={(newUnit) => {
                  const newIngredientMeasurements = [
                    // take the ingredients before the current index
                    ...ingredientMeasurements.slice(0, index),
                    // update the ingredient at the current index
                    {
                      ...ingredientMeasurements[index],
                      ingredient: {
                        name: ingredientMeasurements[index]?.ingredient?.name ?? '',
                        description: ingredientMeasurements[index]?.ingredient?.description ?? '',
                      },
                      unit: newUnit,
                      quantity: ingredientMeasurements[index]?.quantity ?? '',
                    },
                    // take the ingredients after the current index
                    ...ingredientMeasurements.slice(index + 1),
                  ]
                  setIngredientMeasurements(newIngredientMeasurements)
                }}
                placeholder="Enter an ingredient unit"
              />
            </FieldGroup>
          )
        })}

        <Flex className="justify-end gap-2">
          <Button
            variant={Variants.Secondary2}
            // variant={Variants.Secondary}
            //className={`${getVariant(Variants)} other-class-names`}
            onClick={() => {
              setIngredientMeasurements([
                ...ingredientMeasurements,
                {
                  ingredient: {
                    name: '',
                    description: '',
                  },
                  unit: '',
                  quantity: '',
                },
              ])
            }}
          >
            Add an ingredient
          </Button>

          <Button
            type="submit" //className="bg-green-700"
            variant={Variants.Secondary2}
            // variant={Variants.Secondary}
          >
            Enter
          </Button>
        </Flex>
      </form>
    </div>
  )
}
