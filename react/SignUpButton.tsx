import React from 'react'
import { Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

import { isLoggedIn, useSession } from './session'

const SIGN_UP_URL = 'https://b2bstore.myvtex.com/buyer'

const SignUpButton = () => {
  const session = useSession()

  if (isLoggedIn(session)) return null

  const handleNavigate = () => {
    window.location.href = SIGN_UP_URL
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
