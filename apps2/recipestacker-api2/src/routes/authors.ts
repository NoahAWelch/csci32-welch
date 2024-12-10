import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'
import Fastify from 'fastify'
import { FastifyPluginAsync } from 'fastify'

// Schema for upserting a book property
export const UpsertBookPropertyTypeboxType = Type.Object({
  book_reccomendation: Type.Optional(Type.String()),
  genre: Type.Optional(Type.String()),
  book_synopsis: Type.Optional(Type.String()),
  book_rating: Type.Optional(Type.Number()),
  book_id: Type.Optional(Type.String()),
  book_name: Type.Optional(Type.String()),
  book_description: Type.Optional(Type.String()),
});

// Schema for updating an author
export const UpdateAuthorTypeBoxType = Type.Object({
  author_name: Type.Optional(Type.String()),
  author_description: Type.Optional(Type.String()),
  book_properties: Type.Optional(Type.Array(UpsertBookPropertyTypeboxType)),
});

// Schema for creating an author
export const CreateAuthorTypeboxType = Type.Object({
  author_name: Type.String(),
  author_description: Type.String(),
  book_properties: Type.Optional(Type.Array(UpsertBookPropertyTypeboxType)),
});

// Schema for book properties in response
export const BookPropertyTypeboxType = Type.Object({
  book_rating: Type.Optional(Type.Number()),
  book_reccomendation: Type.Optional(Type.String()),
  book_synopsis: Type.Optional(Type.String()),
  genre: Type.Optional(Type.String()),
  book_id: Type.Optional(Type.String()),
  book: Type.Object({
    book_id: Type.Optional(Type.String()),
    book_name: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    book_description: Type.Optional(Type.Union([Type.String(), Type.Null()])),
  }),
});

// Schema for an author response
export const AuthorType = Type.Object({
  author_id: Type.String(),
  author_name: Type.Union([Type.String(), Type.Null()]),
  author_description: Type.Union([Type.String(), Type.Null()]),
  book_properties: Type.Array(BookPropertyTypeboxType),
  user_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), // Can be optional if not always included
});

// Schema for an author not found response
export const AuthorNotFoundType = Type.Object({
  statusCode: Type.Literal(404),
  message: Type.String(),
  error: Type.Literal('Not Found'),
});


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
          sortColumn: Type.Optional(Type.String()),
          sortOrder: Type.Optional(Type.String()),
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
        //book_properties: Type.Array(BookPropertyTypeboxType),
        sortColumn: request.query.sortColumn,
        sortOrder: request.query.sortOrder,
        take: request.query.take,
        skip: request.query.skip,
      });

      if (authors.length === 0) {
        return reply.code(404);
      }
      return authors;
    },
  );

  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/authors/:author_id',
    {
      schema: {
        tags: ['Endpoint: Get one author'],
        description: 'Endpoint to get one author',
        params: Type.Object({
          author_id: Type.String(),
        }),
        response: {
          200: AuthorType,
          404: AuthorNotFoundType,
        },
      },
    },
    async function (request, reply) {
      const author = await fastify.recipeService.findOneAuthor({
        author_id: request.params.author_id,
        //book_properties: Type.Array(BookPropertyTypeboxType),

      });

      if (!author) {
        return reply.code(404);
      }
      return author;
    },
  );

  // Endpoint: Create an author
  fastify.withTypeProvider<TypeBoxTypeProvider>().post(
    '/authors',
    {
      schema: {
        tags: ['create a author'],
        description: 'Endpoint to create an author',
        body: CreateAuthorTypeboxType,
        response: {
          200: Type.Object({ author_id: Type.String() }),
          400: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request, reply) {
/*
      try {
        const createdAuthor = await fastify.recipeService.createOneAuthor({
          author_name: request.body.author_name,
          author_description: request.body.author_description,
          book_properties : request.body.book_properties ?? [],
          //book_properties: Type.Array(UpsertBookPropertyTypeboxType),

        });
        return { author_id: createdAuthor.author_id };
      } catch (error) {
        fastify.log.error(error);
        return reply.code(400).send({ message: 'Failed to create author' });
      }
    },
  );*/
  return fastify.recipeService.createOneAuthor({
    author_name: request.body.author_name,
    author_description: request.body.author_description,
    book_properties: request.body.book_properties,
  })
},
)




/*
  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/users/:user_id/top-books',
    {
      schema: {
        tags: ['Books'],
        description: 'Get top 10 books for a user by user_id',
        params: Type.Object({
          user_id: Type.String(),

        }),
        response: {
          200: Type.Array(
            Type.Object({
              book_id: Type.String(),
              book_name: Type.String(),
              book_description: Type.Optional(Type.String()),
              genre: Type.Optional(Type.String()),
              book_rating: Type.Optional(Type.Number()),
              book_synopsis: Type.Optional(Type.String()),
              book_reccomendation: Type.Optional(Type.String()),
            })
          ),
          404: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request, reply) {
      const { user_id } = request.params;
      try {
        const topBooks = await fastify.recipeService.getTopBooksByUserId({
        user_id,

      });
        if (topBooks.length === 0) {
          return reply.code(404).send({ message: 'No books found for the user' });
        }
        return topBooks;
      } catch (error) {
        fastify.log.error(error);
        return reply.code(400).send({ message: 'Failed to fetch books' });
      }
    }
  );*/

  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/Book/:user_id/top-books',
    {
      schema: {
        tags: ['Books'],
        description: 'Get top 10 books for a user by user_id',
        params: Type.Object({
          user_id: Type.String(),
        }),
        response: {
          200: Type.Array(
            Type.Object({
              book_id: Type.String(),
              book_name: Type.String(),
              book_description: Type.Optional(Type.String()),
              genre: Type.Optional(Type.String()),
              book_rating: Type.Optional(Type.Number()),
              book_synopsis: Type.Optional(Type.String()),
              book_reccomendation: Type.Optional(Type.String()),
            })
          ),
          404: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request, reply) {
      const { user_id } = request.params;
      try {
        const topBooks = await fastify.recipeService.getTopBooksByUserId({
          user_id,

        });

        if (topBooks.length === 0) {
          return reply.code(404).send({ message: 'No books found for the user' });
        }

        return topBooks; // Return the top books
      } catch (error) {
        fastify.log.error(error);
        return reply.code(400).send({ message: 'Failed to fetch books' });
      }
    }
  );


};
export default author;
// "dev": "export NODE_ENV='development' && tsx watch src/app.ts"


