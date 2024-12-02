import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
/*
export const UpsertBookPropertyTypeboxType = Type.Object({
  book_reccomendation: Type.Optional(Type.String()),
  genre: Type.Optional(Type.String()),
  book_synopsis: Type.Optional(Type.String()),
  book_rating: Type.Optional(Type.Number()),
  book_id: Type.Optional(Type.String()),
  book_name: Type.Optional(Type.String()),
  book_description: Type.Optional(Type.String()),
})

export const UpdateAuthorTypeBoxType = Type.Object({
  author_name: Type.Optional(Type.String()),
  author_description: Type.Optional(Type.String()),
  book_properties: Type.Optional(Type.Array(UpsertBookPropertyTypeboxType)),
})

export const CreateAuthorTypeboxType = Type.Object({
  author_name: Type.String(),
  author_description: Type.String(),
  book_properties: Type.Optional(Type.Array(UpsertBookPropertyTypeboxType)),
})

export const BookPropertyTypeboxType = Type.Object({
  book_rating: Type.Optional(Type.Number()),
  book_reccomendation: Type.Optional(Type.String()),
  book_synopsis: Type.Optional(Type.String()),
  genre: Type.Optional(Type.String()),
  book: Type.Object({
    book_id: Type.Optional(Type.String()),
    book_name: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    book_description: Type.Optional(Type.Union([Type.String(), Type.Null()])),
  }),
})

export const AuthorType = Type.Object({
  author_id: Type.String(),
  author_name: Type.Union([Type.String(), Type.Null()]),
  author_description: Type.Union([Type.String(), Type.Null()]),
  book_properties: Type.Array(BookPropertyTypeboxType),
  user_id: Type.String(),
})

export const AuthorNotFoundType = Type.Object({
  statusCode: Type.Literal(404),
  message: Type.String(),
  error: Type.Literal('Not Found'),
})

const author: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/authors',
    {
      schema: {
        tags: ['Endpoint: Get authors'],
        description: 'Endpoint to get multiple authors',
        querystring: Type.Object({
          author_name: Type.Optional(Type.String()),
          books: Type.Optional(Type.String()),
          sortColumn: Type.Optional(Type.Any()),
          sortOrder: Type.Optional(Type.Any()),
          take: Type.Optional(Type.Number()),
          skip: Type.Optional(Type.Number()),
        }),
        response: {
          200: Type.Array(AuthorType),
          404: AuthorNotFoundType,
        },
      },
    },
    async function (request, reply) {
      const authors = await fastify.recipeService.findManyAuthors({
        author_name: request.query.author_name,
        books: request.query.books,
        sortColumn: request.query.sortColumn,
        sortOrder: request.query.sortOrder,
        take: request.query.take,
        skip: request.query.skip,
      })
      return authors
    },
  )

  fastify.withTypeProvider<TypeBoxTypeProvider>().put(
    '/authors/:id',
    {
      schema: {
        tags: ['Endpoint: Update a author'],
        description: 'Endpoint to update one author',
        body: UpdateAuthorTypeBoxType,
        response: {
          200: Type.Object({ author_id: Type.String() }),
          400: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.updateOneAuthor({
        is_deleted: request.params.is_deleted,
        author_id: request.params.id,
        author_name: request.body.author_name,
        author_description: request.body.author_description,
        book_properties: request.body.book_properties,
      })
    },
  )

  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/authors/:id',
    {
      schema: {
        tags: ['Endpoint: Get one author'],
        description: 'Endpoint to get one author',
        params: Type.Object({
          id: Type.String(),
        }),
        response: {
          200: AuthorType,
          404: AuthorNotFoundType,
        },
      },
    },
    async function (request: any, reply) {
      const author = await fastify.recipeService.findOneAuthor({
        author_id: request.params.id,
      })
      return author
    },
  )

  fastify.withTypeProvider<TypeBoxTypeProvider>().post(
    '/authors',
    {
      schema: {
        tags: ['create a author'],
        description: 'Endpoiint to create a author',
        body: CreateAuthorTypeboxType,
        response: {
          200: Type.Object({ author_id: Type.String() }),
          400: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.createOneAuthor({
        author_name: request.body.author_name,
        author_description: request.body.description,
        book_properties: request.body.book_properties,
      })
    },
  )
}
export default author
*/

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
  delete: Type.Optional(Type.Boolean()),
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
          ingredients: Type.Optional(Type.String()),
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
        ingredients: request.query.ingredients,
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
        is_deleted: request.body.delete,
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
