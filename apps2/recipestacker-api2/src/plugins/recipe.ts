import fp from 'fastify-plugin'
import { AuthorService } from '../services/AuthorService.js'
import { FP_PRISMA } from './prisma.js'

export const FP_RECIPE_SERVICE = 'recipeService'

declare module 'fastify' {
  export interface FastifyInstance {
    recipeService: AuthorService
  }
}

export default fp(async (fastify) => {
  const recipeServiceInstance = new AuthorService({ logger: fastify.log, prisma: fastify[FP_PRISMA] })

  fastify.decorate(FP_RECIPE_SERVICE, recipeServiceInstance, [FP_PRISMA])
})
