import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {

  const [dailyData, setdailyData] = useState([])

  useEffect(() => {
    const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?zip=673001,IN&units=imperial&APPID=4f35aa6018a7c52c068ab9fb74cf1576"
    fetch(weatherURL).then((res) => res.json()).then((data) => {
      const list = data.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
      );
      setdailyData(list)
    });
  }, [])

  return (
    <div className="outer">
      <div className="inner-box">

        <h1 className='box-text'>5-Day Forcast</h1>
      </div>
      <div className='place-box'>
        <h3 className='place'>Calicut, IN</h3>
      </div>
      <div>
        <div>
          <div class="card-deck">

            {dailyData.map((data, key) =>
              <Weather data={data} name={"name"} />
            )}

          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
