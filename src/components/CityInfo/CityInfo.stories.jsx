import React from 'react'
import 'typeface-roboto'    
import CityInfo from './CityInfo'

export default {
  title: 'CityInfo',
  Comment: CityInfo,
}

export const CityExample = () => (
  <CityInfo city={'Buenos aires'} country={'Argentina'}></CityInfo>
)
