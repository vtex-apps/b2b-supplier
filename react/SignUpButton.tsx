import React from 'react'
import { Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

import { isLoggedIn, useSession } from './session'

const SIGN_UP_URL = 'https://join.vtex.com/buyer'

const SignUpButton = () => {
  const session = useSession()

  if (isLoggedIn(session)) return null

  return (
    <div className="flex items-center">
      <a href={SIGN_UP_URL} referrerPolicy="no-referrer-when-downgrade">
        <Button variation="tertiary" size="regular" data-testid="signup-button">
          <span className="f6 gray">
            <FormattedMessage id="store/b2b-auth.signup" />
          </span>
        </Button>
      </a>
    </div>
  )
}

export default SignUpButton
