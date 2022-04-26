import type { ServiceContext } from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'

import { resolvers } from './resolvers'

const memoryCache = new LRUCache<string, never>({ max: 5000 })

metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext
}

const keepAlive = async (ctx: Context) => {
  ctx.set('Cache-Control', 'no-cache')
  ctx.status = 200
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    'keep-alive': method({ GET: keepAlive }),
  },
  graphql: {
    resolvers,
  },
})
