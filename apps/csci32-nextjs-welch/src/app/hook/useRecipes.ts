import useSWR from 'swr'

export type CreateRecipeProps = {
  name: string
  ingredient_measurements: {
    ingredient_name: string
    quantity: number
    unit: string
  }[]
  description: string
}

export type UpdateRecipeProps = {
  name?: string
  ingredient_measurements?: {
    ingredient_name: string
    quantity: number
    unit: string
  }[]
  delete?: boolean
  description?: string
}

async function postHelper({ path, body }: { path: string; body: string }) {
  console.log('API URL:', process.env.NEXT_PUBLIC_RECIPESTACKER_API_URL) // Log the environment variable
  return fetch(`${process.env.NEXT_PUBLIC_RECIPESTACKER_API_URL}${path}`, {
    method: 'POST',
    body,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}
export function createRecipe(params: CreateRecipeProps) {
  return postHelper({ path: '/recipes', body: JSON.stringify(params) })
}

async function fetcher({ path, urlParams }: { path: string; urlParams?: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RECIPESTACKER_API_URL}${path}${urlParams ? `?${urlParams}` : ''}`,
    {
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
  )
  return res.json()
}

type SearchProps = {
  name?: string
  ingredients?: string
}

export function useRecipes(params?: SearchProps) {
  const urlParams = new URLSearchParams(params).toString()
  return useSWR(['/recipes', urlParams], ([path, urlParams]) => fetcher({ path, urlParams }))
}

async function putHelper({ path, params }: { path: string; params: UpdateRecipeProps }) {
  return fetch(`${process.env.NEXT_PUBLIC_RECIPESTACKER_API_URL}${path}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export function getRecipe(recipe_id: string) {
  return fetcher({ path: `/recipes/${recipe_id}` })
}

export function updateRecipe({ recipe_id, params }: { recipe_id: string; params: UpdateRecipeProps }) {
  return putHelper({ path: `/recipes/${recipe_id}`, params })
}

export function deleteRecipe(recipe_id: string) {
  return putHelper({ path: `/recipes/${recipe_id}`, params: { delete: true } })
}
//function useSWR(arg0: string[], arg1: ([path, urlParams]: [any, any]) => Promise<any>) {
// throw new Error('Function not implemented.')
//}
