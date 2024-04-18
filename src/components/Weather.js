import React from 'react'
var moment = require('moment')

export default function Weather({ data, name }) {
  let newDate = new Date()
  const weekday = data.dt * 1000
  newDate.setTime(weekday)
  return (
    <>
      <div class="card">
        <div class="card-body text-center">
          <h3 class="card-text-1">{moment(newDate).format("dddd")}</h3>
          <h6 className='card-text-2'>{data.dt_txt}</h6>
          <br />
          <h2 className='card-text-3'>{data.main.temp} °F</h2>
          <br />
          <h6 className='card-text-4'>{moment(newDate).format("MMMM Do, h:mm a")}</h6>
          <br />
          <h6 className='card-text-5'>{data.weather[0].description}</h6>
        </div>
      </div>
    </>
  )
}
