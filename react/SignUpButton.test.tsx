import React from 'react'
import { render } from '@vtex/test-tools/react'

import SignUpButton from './SignUpButton'

test('Should render', () => {
  const { queryByTestId } = render(<SignUpButton />)

  expect(queryByTestId('signup-button')).toBeInTheDocument()
})
