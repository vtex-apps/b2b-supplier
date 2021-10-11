import React from 'react'
import { Alert } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

import { isApproved, isLoggedIn, useSession } from './session'

const ApprovedStatus = () => {
  const [show, setShow] = React.useState(true)
  const session = useSession()

  if (!show) return null

  if (!isLoggedIn(session)) return null

  if (isApproved(session)) return null

  return (
    <div className="relative">
      <div className="mw8 tc absolute center top-0 left-0 right-0 z-1">
        <Alert
          type="warning"
          onClose={() => setShow(false)}
          data-testid="message-container"
        >
          <FormattedMessage id="store/b2b-approved-message.message" />
        </Alert>
      </div>
    </div>
  )
}

export default ApprovedStatus
