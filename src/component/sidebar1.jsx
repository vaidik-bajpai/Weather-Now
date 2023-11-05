import { InputBar } from "./inputBar"
import IconSelector from "./iconSelector"
import { getDay, getFormattedDate, absFormattedTime } from "../assets/iconss/helperFunction"
export default function MainDetails({data, setCity}){
    
    return(
        <div className="MainContents">
            <div className="locationCond">{data.current.condition.text}</div>
            <div className="locationName">{data.location.name}</div>
            <div className="dayDateTime">
                <div className="dayDate">{getDay(data.location.localtime) + ", " +  getFormattedDate(data.location.localtime)}</div>
                <div className="time">{absFormattedTime(data.location.localtime)}</div>
            </div>
            <div className="locationTemp">{Math.floor(data.current.temp_c)} °C</div>
            <IconSelector code={data.current.condition.code} isDay={data.current.isDay} className="icons"/>
            <InputBar setCity={setCity}/>
        </div>
    )
}
