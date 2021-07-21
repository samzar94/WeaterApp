import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
  { city: 'buenos aires', country: 'Argentina' },
  { city: 'bogota', country: 'colombia' },
  { city: 'Madrid', country: 'España' },
  { city: 'Ciudad de mexico', country: 'Mexico' },
]
test('CityList renders', async () => {
  //AAA

  const { findAllByRole } = render(<CityList cities={cities} />)
  const items = await findAllByRole('listitem')

  expect(items).toHaveLength(4)
})

test('citylist  click on item', async () => {
  const fnCLickOnItem = jest.fn() //
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnCLickOnItem} />,
  )
  const items = await findAllByRole('listitem')
  fireEvent.click(items[0])

  expect(fnCLickOnItem).toHaveBeenCalledTimes(1)
})
