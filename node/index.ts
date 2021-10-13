import type { ServiceContext } from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'

import { resolvers } from './resolvers'

const memoryCache = new LRUCache<string, never>({ max: 5000 })

metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext
}

// Export a service that defines route handlers and client options.
export default new Service({
  graphql: {
    resolvers,
  },
})
