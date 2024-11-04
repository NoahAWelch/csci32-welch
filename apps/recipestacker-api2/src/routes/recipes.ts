import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import Fastify from 'fastify'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'

export const UpsertIngredientMeasurementTypeboxType = Type.Object({
  unit: Type.Optional(Type.String()),
  quantity: Type.Optional(Type.Number()),
  ingredient_id: Type.Optional(Type.String()),
  ingredient_name: Type.Optional(Type.String()),
  ingredient_description: Type.Optional(Type.String()),
})

export const UpdateRecipeTypeBoxType = Type.Object({
  name: Type.Optional(Type.String()),
  description: Type.Optional(Type.String()),
  ingredient_measurements: Type.Optional(Type.Array(UpsertIngredientMeasurementTypeboxType)),
})

export const CreateRecipeTypeboxType = Type.Object({
  name: Type.String(),
  description: Type.String(),
  ingredient_measurements: Type.Array(UpsertIngredientMeasurementTypeboxType),
})

export const IngredientMeasurementTypeboxType = Type.Object({
  unit: Type.Optional(Type.String()),
  quantity: Type.Optional(Type.Number()),
  ingredient: Type.Object({
    ingredient_id: Type.Optional(Type.String()),
    name: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    description: Type.Optional(Type.Union([Type.String(), Type.Null()])),
  }),
})

export const RecipeType = Type.Object({
  recipe_id: Type.String(),
  name: Type.Union([Type.String(), Type.Null()]),
  ingredient_measurements: Type.Array(IngredientMeasurementTypeboxType),
  description: Type.String(),
  user_id: Type.String(),
})

export const RecipeNotFoundType = Type.Object({
  statusCode: Type.Literal(404),
  message: Type.String(),
  error: Type.Literal('Not Found'),
})

const recipe: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/recipes',
    {
      schema: {
        tags: ['Endpoint: Get recipes'],
        description: 'Endpoint to get multiple recipes',
        querystring: Type.Object({
          name: Type.Optional(Type.String()),
          sortColumn: Type.Optional(Type.Any()),
          sortOrder: Type.Optional(Type.Any()),
          take: Type.Optional(Type.Number()),
          skip: Type.Optional(Type.Number()),
        }),
        response: {
          200: Type.Array(RecipeType),
          404: RecipeNotFoundType,
        },
      },
    },
    async function (request, reply) {
      const recipes = await fastify.recipeService.findManyRecipes({
        name: request.query.name,
        sortColumn: request.query.sortColumn,
        sortOrder: request.query.sortOrder,
        take: request.query.take,
        skip: request.query.skip,
      })
      return recipes
    },
  )

  fastify.withTypeProvider<TypeBoxTypeProvider>().put(
    '/recipes/:id',
    {
      schema: {
        tags: ['Endpoint: Update a recipe'],
        description: 'Endpoint to update one recipe',
        body: UpdateRecipeTypeBoxType,
        response: {
          200: Type.Object({ recipe_id: Type.String() }),
          400: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.updateOneRecipe({
        recipe_id: request.params.id,
        name: request.body.name,
        description: request.body.description,
        ingredient_measurements: request.body.ingredient_measurements,
      })
    },
  )

  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/recipes/:id',
    {
      schema: {
        tags: ['Endpoint: Get one recipe'],
        description: 'Endpoint to get one recipe',
        params: Type.Object({
          id: Type.String(),
        }),
        responce: {
          200: RecipeType,
          404: RecipeNotFoundType,
        },
      },
    },
    async function (request: any, reply) {
      const recipe = await fastify.recipeService.findOneRecipe({
        recipe_id: request.params.id,
      })
      return recipe
    },
  )

  fastify.withTypeProvider<TypeBoxTypeProvider>().post(
    '/recipes',
    {
      schema: {
        tags: ['create a recipe'],
        description: 'Endpoiint to create a recipe',
        body: CreateRecipeTypeboxType,
        response: {
          200: Type.Object({ recipe_id: Type.String() }),
          400: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.createOneRecipe({
        name: request.body.name,
        description: request.body.description,
        ingredient_measurements: request.body.ingredient_measurements,
      })
    },
  )
}
export default recipe

// "dev": "export NODE_ENV='development' && tsx watch src/app.ts"

/* fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/recipes/:id',
    {
      schema: {
        tags: ['Endpoint: Get one recipe'],
        description: 'Endpoint to get one recipe',
        body: UpdateRecipeTypeBoxType,
        responce: {
          200: RecipeType,
          404: RecipeNotFoundType,
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.findOneRecipe({
        recipe_id: request.params.id,
      })
    },
  )*/

/* fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/recipes',
    {
      schema: {
        tags: ['Endpoint: Get one recipe'],
        description: 'Endpoint to get one recipe',
        body: UpdateRecipeTypeBoxType,
        responce: {
          200: Type.Array(RecipeType),
          404: RecipeNotFoundType,
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.findManyRecipes({
        name: request.query.name,
        sortColumn: request.queryy.sortColumn,
        sortOrder: request.query.sortOrder,
        take: request.query.take,
        skip: request.query.skip,
      })
    },
  )*/
