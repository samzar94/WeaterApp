import React from 'react'
import Forecast from './Forecast'

export default {
  title: 'Forecast',
  component: Forecast,
}

const forecastItemList = [
  { hour: 14, state: 'sunny', temperature: 17, weekDay: 'jueves' },
  { hour: 15, state: 'cloud', temperature: 13, weekDay: 'jueves' },
  { hour: 16, state: 'fog', temperature: 23, weekDay: 'viernes' },
  { hour: 17, state: 'rain', temperature: 43, weekDay: 'sabado' },
]
export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
)
