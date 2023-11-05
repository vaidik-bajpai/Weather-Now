import { v4 as uuidv4 } from "uuid"
import IconSelector from "./iconSelector"
import { getDay, getFormattedTime } from "../assets/icons/helperFunction"

export default function ForeCast({
    daily,
    setDaily,
    data,
    hour, 
    setHour
}){
    function handleClick(e){
        document.querySelector('.border').classList.remove('border')
        e.currentTarget.classList.add("border")
        if(e.currentTarget.textContent === "Daily"){
            setDaily(true)
        }
        else{
            setDaily(false)
            setHour(1)
        }
    }

    function handleLeft(){
        if(hour > 1)
            document.querySelector(".currentHours").classList.remove("currentHours")
            document.querySelector(`.hour${hour-1}`).classList.add("currentHours")
            setHour(hour-1)
    }

    function handleRight(){
        if(hour < 3){
            document.querySelector(".currentHours").classList.remove("currentHours")
            document.querySelector(`.hour${hour+1}`).classList.add("currentHours")
            setHour(hour+1)
        }
    }

    return(
        <div className="forecast">
            <div className="forecastButtons">
                <button className="border" onClick={handleClick}>Daily</button>
                <button onClick={handleClick}>Hourly</button>
                {
                hour && !daily && <div className="toggleHour">
                    <button className="left" onClick={handleLeft}><svg className="arrow" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.075 34.075" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill:"#010002;"}} d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79 L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792 C25.58,33.883,25.075,34.075,24.57,34.075z"></path> </g> </g> </g></svg></button>
                    <div className="allHours hour1 currentHours"></div>
                    <div className="allHours hour2"></div>
                    <div className="allHours hour3"></div>
                    <button onClick={handleRight}><svg className="arrow" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.075 34.075" xmlSpace="preserve" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill:"#010002;"}} d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79 L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792 C25.58,33.883,25.075,34.075,24.57,34.075z"></path> </g> </g> </g></svg></button>
                </div>
                }
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