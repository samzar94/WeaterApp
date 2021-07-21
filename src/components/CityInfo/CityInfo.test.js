import React from 'react'
import CityInfo from './CityInfo'
import { render } from '@testing-library/react'

test('CitInfo render', async () => {
  //AAA
  //arrange organizar
  //Actuar
  const city = 'Buenos aires'
  const country = 'Argentina'
  const { findAllByRole } = render(<CityInfo city={city} country={country} />)
  //findAllByRole nos va a encontrar en este caso todos los componentes que sean "heading"=>h1, h2, h3..etc
  const cityAndCountryComponent = await findAllByRole('heading')

  //acert es lo que se esperaba
  //cuando el test es correcto
  // cuando en el primer elemento (heading) se encuentre la ciudad buenos aires
  // y cuadno en el segundo elemento se encuentre el pais argentina
  expect(cityAndCountryComponent[0]).toHaveTextContent(city)
  expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})
