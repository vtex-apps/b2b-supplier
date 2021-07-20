import React from 'react'
import { FormattedMessage } from 'react-intl'

import VtexLogoFull from './assests/VtexLogoFull'
import PinkDots from './assests/PinkDots'
import './styles.global.css'


const CreatingBuyerOrgScreen = () => {
  return (
    <div className="flex flex-row items-center justify-center vw-100 vh-100">
      <div
        className="flex flex-column items-center"
        data-cy="create-account-wrapper"
      >
        <div className="h2 mb7">
          <VtexLogoFull />
        </div>
        <div className="flex flex-row mt5">
          <PinkDots />
          <div className="ml4">
            <p className="t-heading-4">
              <FormattedMessage id="store/b2b-supplier.creating-buyer-org" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatingBuyerOrgScreen
