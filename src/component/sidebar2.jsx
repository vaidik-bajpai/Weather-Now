import { Thermometer, Humidity, Wind, Rain} from "../assets/iconss/icons"

export default function SideBar({data}){
    return(
        <div className="sideBar">
            <div className="sideBarItems">
                <Thermometer className="sidebarIcons"/>
                <div className="sideBarTextContent">
                    <div className="sidebarText">Feels Like</div>
                    <div className="sidebarValue">{data.current.feelslike_c} °C</div>
                </div>
            </div>
            <div className="sideBarItems">
                <Humidity className="sidebarIcons"/>
                <div className="sideBarTextContent">
                    <div className="sidebarText">Humidity</div>
                    <div className="sidebarValue">{data.current.humidity} %</div>
                </div>
            </div>
            <div className="sideBarItems">
                <Rain className="sidebarIcons"/>
                <div className="sideBarTextContent">
                    <div className="sidebarText">Chance Of Rain</div>
                    <div className="sidebarValue">{data.forecast.forecastday[0].day.daily_chance_of_rain} %</div>
                </div>
            </div>
            <div className="sideBarItems">
                <Wind className="sidebarIcons"/>
                <div className="sideBarTextContent">
                    <div className="sidebarText">Wind Speed</div>
                    <div className="sidebarValue">{data.current.wind_kph} km/h</div>
                </div>
            </div>
        </div>   
    )
}