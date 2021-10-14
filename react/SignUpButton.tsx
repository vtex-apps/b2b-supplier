import React from 'react'
import { Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'

import SignUpButtonQuery from './graphql/SignUpButtonQuery.graphql'
import { isLoggedIn, useSession } from './session'

const SIGN_UP_URL = 'https://gsasouza--b2bstore.myvtex.com/buyer'
const SIGN_UP_ROUTE = '/signup'

const useSignUpStart = (handleRedirectSignup: () => void) => {
  const { route } = useRuntime()

  React.useEffect(() => {
    if (route.canonicalPath === SIGN_UP_ROUTE) handleRedirectSignup()
  }, [route.canonicalPath, handleRedirectSignup])
}

const SignUpButton = () => {
  const { data } = useQuery(SignUpButtonQuery, { ssr: false })

  const handles = useCssHandles(['container', 'button', 'label'])

  const session = useSession()

  const handleRedirectSignup = React.useCallback(() => {
    if (!data?.supplierMeta) return

    const qs = new URLSearchParams({ supplier: data?.supplierMeta })

    window.location.href = `${SIGN_UP_URL}?${qs}`
  }, [data?.supplierMeta])

  useSignUpStart(handleRedirectSignup)

  if (isLoggedIn(session)) return null

  return (
    <div className={`${handles.container ?? ''} flex items-center`}>
      <Button
        variation="tertiary"
        size="regular"
        data-testid="signup-button"
        onClick={handleRedirectSignup}
        className={handles.button}
      >
        <span className={`${handles.label ?? ''} f6 gray`}>
          <FormattedMessage id="store/b2b-auth.signup" />
        </span>
      </Button>
    </div>
  )
}

export default SignUpButton
