import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from 'react-icons/wi'

const validValues = ['cloud', 'cloudy', 'fog', 'sunny', 'rain']

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
}

const renderState = (state) => {
  const IconState = stateByName[state]
  return <IconState />
}

const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: '5em' }}>
        {renderState(state)}
      </IconContext.Provider>
      <Typography display="inline" variant="h2">
        {temperature}
      </Typography>
    </div>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather
