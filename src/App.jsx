import './App.css'
import { useState, useEffect } from 'react'
import LandInPage from './pages/landinpage'
import { InputBar } from './component/inputBar'
import ForeCast from './component/forecast'
import MainDetails from './component/sidebar1'
import SideBar from './component/sidebar2'

function App() {
  const [city, setCity] = useState("Gwalior")
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [daily, setDaily] = useState(true)
  const [hour, setHour] = useState(3)
  const [start, setStart] = useState(false)

  function filterData(info){
    const actualData = {
      location: {
        city: info.location.name,
        region: info.location.region,
        time: info.location.localtime,
      },
      weather: {
        condition: info.current.condition.text,
        feelsLike_c: info.current.feelslike_c,
        feelsLike_f: info.current.feelslike_f,
        windSpeed: info.current.wind_kph,
        humidity: info.current.humidity,
        isday: +info.current.is_day
      },
      forecast: {
        daily: [

        ],
        hourly: [

        ]
      }
    }
  }

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=9aee14d4fc684e53a35202737233110&q=${city}&days=7&aqi=no&alerts=no`, {
      mode: "cors"
    })
      .then((response) => {
        if(response.status >= 400){
          console.log(response)
          throw new Error("server error")
        }
        return response.json()
      })
      .then((response) => {
        setData(response)
        console.log(response)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [city])

  if(error) return <p>A network error was encountered</p>
  if(loading) return <p>Loading...</p>

  return (
      data && start ? (
        <>
          <div className="page">
            <div className="sidebars">
              <MainDetails data={data} setCity={setCity}/>
              <SideBar data={data}/>
            </div>
            <ForeCast daily={daily} setDaily={setDaily} data={data} hour={hour} setHour={setHour}/>
          </div>
        </>
      ) : (
        <LandInPage start={start} setStart={setStart}/>
      )
  )
}

export default App
