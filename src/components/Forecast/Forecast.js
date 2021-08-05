import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'

const renderForecastItem = (forecast) => {
  const { weekDay, hour, state, temperature } = forecast
  return (
    <Grid item key={`${weekDay}${hour}`}>
      <ForecastItem
        hour={hour}
        weekDay={weekDay}
        state={state}
        temperature={temperature}
      ></ForecastItem>
    </Grid>
  )
}

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid conrtainer justify="center" alignItems="center">
      {forecastItemList.map((forecast) => renderForecastItem(Forecast))}
    </Grid>
  )
}

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      temperature: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
    }),
  ).isRequired,
}

export default Forecast
