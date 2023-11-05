import { v4 as uuidv4 } from "uuid"
import IconSelector from "./iconSelector"
import { getDay, getFormattedTime } from "../assets/iconss/helperFunction"

export default function ForeCast({
    daily,
    setDaily,
    data,
    hour, 
    setHour
}){
    const x = new Array(8)
    function handleClick(e){
        e.currentTarget.textContent === "Daily" ? (
            setDaily(true)
        ) : (
            setDaily(false)
        )
    }

    return(
        <div className="forecast">
            <div className="forecastButtons">
                <button onClick={handleClick}>Daily</button>
                <button onClick={handleClick}>Hourly</button>
                <div>
                    <button></button>
                    <div className="hour1"></div>
                    <div className="hour2"></div>
                    <div className="hour3"></div>
                    <button></button>
                </div>
            </div>
            <div className="forecastBar">
                {
                    daily ? (
                        data.forecast.forecastday
                            .slice(0)
                            .reverse()
                            .map((item) => {
                            return(
                                <div className="forecastDay">
                                    <div className="forecastItemDay">{getDay(item.date)}</div>
                                    <div className="forecastValues">
                                        <div className="forecastItemValue1">{Math.floor(item.day.maxtemp_c)} °C</div>
                                        <div className="forecastItemValue2">{Math.floor(item.day.avgtemp_c)} °C</div>
                                    </div>
                                    <IconSelector code={item.day.condition.code} isDay={item.day.condition.isDay} className="dailyIcons"/>
                                </div>
                            )
                        })
                    ) : (
                        hour === 1 ? (
                            data.forecast.forecastday[0].hour.slice(0, 8).map((item) => {
                                return(
                                    <div>
                                        <div className="forecastItemTime">{getFormattedTime(item.time)}</div>
                                        <div className="forecastItemValue1">{Math.floor(item.temp_c)} °C</div>
                                        <IconSelector code={item.condition.code} isDay={item.is_day} className="hoursIcons"/>
                                    </div>
                                )
                            })
                        )
                         : hour === 2 ? (
                            data.forecast.forecastday[0].hour.slice(8, 16).map((item) => {
                                return(
                                    <div>
                                        <div className="forecastItemTime">{getFormattedTime(item.time)}</div>
                                        <div className="forecastItemValue1">{Math.floor(item.temp_c)} °C</div>
                                        <IconSelector code={item.condition.code} isDay={item.is_day} className="hoursIcons"/>
                                    </div>
                                )
                            })
                        )
                        : hour === 3 ? (
                            data.forecast.forecastday[0].hour.slice(17, 24).map((item) => {
                                return(
                                    <div>
                                        <div className="forecastItemTime">{getFormattedTime(item.time)}</div>
                                        <div className="forecastItemValue1">{Math.floor(item.temp_c)} °C</div>
                                        <IconSelector code={item.condition.code} isDay={item.is_day} className="hoursIcons"/>
                                    </div>
                                )
                            })
                        )
                        : null 
                    )
                }
            </div>
        </div>
    )
}