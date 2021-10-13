import React from 'react'
import { Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'

import SignUpButtonQuery from './graphql/SignUpButtonQuery.graphql'
import { isLoggedIn, useSession } from './session'

const SIGN_UP_URL = 'https://join.vtex.com/buyer'

const SignUpButton = () => {
  const { data } = useQuery(SignUpButtonQuery, { ssr: false })

  const handles = useCssHandles(['container', 'button', 'label'])

  const session = useSession()

  if (isLoggedIn(session)) return null

  const handleNavigate = () => {
    console.log(data?.supplierMeta)
    const qs = new URLSearchParams({ supplier: data?.supplierMeta })

    window.location.href = `${SIGN_UP_URL}?${qs}`
  }

  return (
    <div className={`${handles.container ?? ''} flex items-center`}>
      <Button
        variation="tertiary"
        size="regular"
        data-testid="signup-button"
        onClick={handleNavigate}
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
