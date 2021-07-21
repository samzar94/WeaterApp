import React from 'react'
import Weather from './Weather'

export default {
  title: 'Weather',
  Comment: Weather,
}

export const WeahterExample = () => <Weather temperature={10} state="cloud" />
export const WeahterSUNNY = () => <Weather temperature={10} state="sunny" />
