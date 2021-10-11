import React from 'react'
import { render } from '@vtex/test-tools/react'

import ApprovedStatus from './ApprovedStatus'

test('should render', () => {
  const { queryByTestId } = render(<ApprovedStatus />)

  expect(queryByTestId('message-container')).toBeInTheDocument()
})
