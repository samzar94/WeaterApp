import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
  { hour: 14, state: 'sunny', temperature: 17, weekDay: 'jueves' },
  { hour: 15, state: 'cloud', temperature: 13, weekDay: 'jueves' },
  { hour: 16, state: 'fog', temperature: 23, weekDay: 'viernes' },
  { hour: 17, state: 'rain', temperature: 43, weekDay: 'sabado' },
]

test('should ', async () => {
  //nos ayuda a encontrar otra parte del componente que los vam
  //a encontrar por una marca
  // const {findAllByTestId} para encontrar cada item qe se renderiza
  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />,
  )

  const forecastItems = await findAllByTestId('forecast-item-container')

  expect(forecastItems).toHaveLength(4)
})
