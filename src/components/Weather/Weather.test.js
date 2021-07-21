import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Weahter render', async () => {
  //AAA arramge, Act, Acert
  const { findByRole } = render(<Weather temperature={10} state="cloud" />)

  const temp = await findByRole('heading')

  expect(temp).toHaveTextContent('10')
})
