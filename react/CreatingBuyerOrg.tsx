import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useMutation } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'

import AddBuyerOrgToSupplierMutation from './graphql/AddBuyerOrgToSupplierMutation.graphql'
import VtexLogoFull from './assests/VtexLogoFull'
import PinkDots from './assests/PinkDots'

import './styles.global.css'

const CreatingBuyerOrg = () => {
  const { navigate } = useRuntime()
  const [mutate] = useMutation(AddBuyerOrgToSupplierMutation)

  React.useEffect(() => {
    ;(async () => {
      const token =
        new URLSearchParams(window.location.search).get('token') ?? ''

      if (token) {
        await mutate({ variables: { input: { token } } })
        navigate({ to: '/' })
      }
    })()
  }, [mutate, navigate])

  return (
    <div className="pv8">
      <div
        className="flex flex-column items-center pv8"
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

export default CreatingBuyerOrg
