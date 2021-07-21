import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = (eventOnclickCity) => {
  const renderCityAndCountryInternal = (cityAndCountry) => {
    const { city, country } = cityAndCountry
    return (
      <ListItem key={city} onClick={eventOnclickCity}>
        <Grid container justify="center" alignItems="center">
          <Grid item sm={8} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <Weather temperature={10} state="sunny" />
          </Grid>
        </Grid>
      </ListItem>
    )
  }
  return renderCityAndCountryInternal
}

const CytyList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(cityAndCountry),
      )}
    </ul>
  )
}

CytyList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CytyList
