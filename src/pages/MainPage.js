import React from 'react'
import { useHistory } from 'react-router-dom' //para manipular la historia del navegador
import CityList from './../components/CityList'

const cities = [
  { city: 'buenos aires', country: 'Argentina' },
  { city: 'bogota', country: 'colombia' },
  { city: 'Madrid', country: 'España' },
  { city: 'Ciudad de mexico', country: 'Mexico' },
]

function MainPage(props) {
  const history = useHistory()
  const onClickHander = () => {
    // history push nos permite trabajar con la url y cambiarla
    history.push('/city')
  }

  return (
    <div>
      <h2>Lista de ciudades</h2>
      <CityList cities={cities} onClickCity={onClickHander} />
    </div>
  )
}

export default MainPage
