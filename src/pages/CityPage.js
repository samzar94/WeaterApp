import React from 'react'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import { Grid } from '@material-ui/core'

const forecastItemListExample = [
  { hour: 14, state: 'sunny', temperature: 17, weekDay: 'jueves' },
  { hour: 15, state: 'cloud', temperature: 13, weekDay: 'jueves' },
  { hour: 16, state: 'fog', temperature: 23, weekDay: 'viernes' },
  { hour: 17, state: 'rain', temperature: 43, weekDay: 'sabado' },
]
const dataExample = [
  {
    dayHour: 'Jue 18',
    min: 14,
    max: 22,
  },
  {
    dayHour: 'Vie 06',
    min: 18,
    max: 27,
  },
  {
    dayHour: 'Vie 12',
    min: 18,
    max: 28,
  },
  {
    dayHour: 'Vie 18',
    min: 18,
    max: 25,
  },
  {
    dayHour: 'Sab 06',
    min: 15,
    max: 22,
  },
  {
    dayHour: 'Sab 12',
    min: 12,
    max: 19,
  },
]

function CityPage(props) {
  const city = 'Buenos Aires'
  const country = 'Argentina'
  const state = 'cloudy'
  const temperature = 20
  const humidity = 80
  const wind = 5
  const data = dataExample
  const forecastItemList = forecastItemListExample

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={8}>
          <Weather state={state} temperature={temperature} />
        </Grid>
        <Grid item xs={4}>
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
      </Grid>
      <Grid item>
        <ForecastChart data={data} />
      </Grid>
      <Grid item>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  )
}

export default CityPage
