import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
  title: 'City list',
  component: CityList,
}

const cities = [
  { city: 'buenos aires', country: 'Argentina' },
  { city: 'bogota', country: 'colombia' },
  { city: 'Madrid', country: 'España' },
  { city: 'Ciudad de mexico', country: 'Mexico' },
]
export const CityLidtExample = () => (
  <CityList cities={cities} onClickCity={action('click on city')} />
)
