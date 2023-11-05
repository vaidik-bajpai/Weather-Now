import { Sunny, Clear, Rain, Mist, Sprinkle, Sleet, Hail, Lightning, Thunderstorm, Cloudy, Overcast, Snow, Snowflake, HeavyRain, Storm, SnowStormD, SnowStormN, HeavySnow} from "../assets/iconss/icons"

export default function IconSelector({code, isDay, className}){
    return(
        <>
        {
            code === 1000 && isDay ? <Sunny className={className}/>
            : code === 1000 ? <Clear className={className}/>
            : code === 1003 || code === 1006 ?  <Cloudy className={className}/>
            : code === 1009 ? <Overcast className={className}/>
            : code === 1030 || code === 1135 || code === 1147 ? <Mist className={className}/>
            : code === 1186 || code === 1189 ? <Rain className={className}/>
            : code === 1063 ? <Rain className={className}/> 
            : code === 1213 || code === 1216 || code === 1219 ? <Snow className={className}/>
            : code === 1066 ? <Snowflake className={className}/>
            : code === 1069 || code === 1204 ? <Sleet className={className}/>
            : code === 1207 ? <div>Sleet storm</div>
            : code === 1072 || code === 1153 || code === 1168 || code === 1171 || code === 1180 || code === 1183 || code === 1240 || code === 1198 || code === 1252? <Sprinkle className={className}/>
            : code === 1192 || code === 1195 ? <HeavyRain className={className}/>
            : code === 1087 ? <Lightning className={className}/>
            : code === 1222 || 1225? <Storm className={className}/>
            : code === 1237 || code === 1261 || code === 1264 ? <Hail />
            : code === 1114 || code === 1117 || code === 1201 || code === 1222 || code === 1225 || code === 1258 ? <HeavySnow className={className}/>
            : code === 1274 ? <div>storm shower</div>
            : code === 1276 ? <Thunderstorm className={className}/>
            : (code === 1279 || code === 1282) && code === isDay? <SnowStormD className={className}/>
            : code === 1279 || code === 1282 ? <SnowStormN className={className}/>
            : <div>Error Rendering</div>
        }
        </>
    )
}