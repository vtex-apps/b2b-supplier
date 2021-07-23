import type {
  Session,
  SessionPromise,
  SessionResponse,
} from 'vtex.render-runtime'
import React from 'react'

const NOT_APPROVED_TRADE_POLICY = '5'

declare global {
  interface Window {
    __RENDER_8_SESSION__?: {
      sessionPromise?: Promise<SessionPromise>
    }
  }
}

export function getSession() {
  return window?.__RENDER_8_SESSION__?.sessionPromise ?? null
}

export const useSession = () => {
  const [session, setSession] = React.useState<SessionResponse>()

  React.useEffect(() => {
    ;(async () => {
      const sessionPromise = getSession()

      if (!sessionPromise) return

      const { response } = await sessionPromise

      setSession(response)
    })()
  }, [])

  return session
}

export const isLoggedIn = (session: SessionResponse | undefined): boolean =>
  !!(session as Session)?.namespaces?.profile?.email

export const isApproved = (session: SessionResponse | undefined): boolean => {
  const tradePolicy = (session as Session)?.namespaces?.store?.channel?.value

  if (!tradePolicy) return false

  return tradePolicy !== NOT_APPROVED_TRADE_POLICY
}
