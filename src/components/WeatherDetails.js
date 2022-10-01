import React from 'react'

const WeatherDetails = ({title, data, unit}) => {
  return (
    <p>
        {title}:{" "}
        <span>
            {data}
            {unit}
        </span>
    </p>
  )
}

export default WeatherDetails