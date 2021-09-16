import type { ClientsConfig, ServiceContext } from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'

import { resolvers } from './resolvers'
import { Clients } from './clients'

const TIMEOUT_MS = 800
const memoryCache = new LRUCache<string, never>({ max: 5000 })

metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext<Clients>
}

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    status: {
      memoryCache,
    },
  },
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  graphql: {
    resolvers,
  },
})