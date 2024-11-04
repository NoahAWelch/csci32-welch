export type CreateRecipeProps = {
  name: string
  ingredient_measurements: {
    ingredient_name: string
    quantity: number
    unit: string
  }[]
  description: string
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
