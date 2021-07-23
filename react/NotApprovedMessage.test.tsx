import React from 'react'
import { render } from '@vtex/test-tools/react'

import ApprovedMessage from './NotApprovedMessage'

test('greets Fred', () => {
  const { queryByText } = render(<ApprovedMessage />)

  expect(queryByText('Hey, Fred')).toBeInTheDocument()
})
