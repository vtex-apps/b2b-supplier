import React from 'react'
import { Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'

import { isLoggedIn, useSession } from './session'

const SIGN_UP_URL = 'https://join.vtex.com/buyer'

const SignUpButton = () => {
  const { account } = useRuntime()
  const session = useSession()

  if (isLoggedIn(session)) return null

  const handleNavigate = () => {
    const qs = new URLSearchParams({ account })

    window.location.href = `${SIGN_UP_URL}?${qs}`
  }

  return (
    <div className="flex items-center">
      <Button
        variation="tertiary"
        size="regular"
        data-testid="signup-button"
        onClick={handleNavigate}
      >
        <span className="f6 gray">
          <FormattedMessage id="store/b2b-auth.signup" />
        </span>
      </Button>
    </div>
  )
}

export default SignUpButton
