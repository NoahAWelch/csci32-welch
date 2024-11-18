import fp from 'fastify-plugin'
import { AuthorService } from '../services/AuthorService.js'
import { FP_PRISMA } from './prisma.js'

export const FP_AUTHOR_SERVICE = 'authorService'

declare module 'fastify' {
  export interface FastifyInstance {
    authorService: AuthorService
  }
}

export default fp(async (fastify) => {
  const authorServiceInstance = new AuthorService({ logger: fastify.log, prisma: fastify[FP_PRISMA] })

  fastify.decorate(FP_AUTHOR_SERVICE, authorServiceInstance, [FP_PRISMA])
})
