export function getDay(date){
        date = date.split(" ")
        let x = new Date(date)
        if(x.getDay() === 1) return "Monday"
        else if(x.getDay() === 2) return "Thursday"
        else if(x.getDay() === 3) return "Wednesday"
        else if(x.getDay() === 4) return "Thursday"
        else if(x.getDay() === 5) return "Friday"
        else if(x.getDay() === 6) return "Saturday"
        else return "Sunday"
}

export function getFormattedDate(dateTime){
    dateTime = dateTime.split(" ")
    let x = new Date(dateTime)
    x = String(x)
    let month = x.split(" ")[1]
    let day = x.split(" ")[2].replace("0", "")
    let year = x.split(" ")[3]
    if(Number(day) % 10 === 1){
        return day + "st" + month + year
    }
    if(Number(day) % 10 === 1){
        return day + "nd" + month + year
    }
    if(Number(day) % 10 === 1){
        return day + "rd" + month + year
    }
    else{
        return day + "th " + month + " '" + year
    }
}
export function getFormattedTime(dateTime){
    dateTime = dateTime.split(" ")
    let x = new Date(dateTime)
    x = String(x)
    let time = x.split(" ")[4]
    let hour = time.split(":")[0].replace("0", "")
    if(Number(hour) < 12)
        return `${hour} am`
    else if(Number(hour) === 12)
        return `${hour} pm`
    return `${Number(hour)-12} pm`
}

export function absFormattedTime(dateTime){
    dateTime = dateTime.split(" ")
    let x = new Date(dateTime)
    x = String(x)
    let time = x.split(" ")[4]
    let hour = time.split(":")[0].replace("0", "")
    let min = time.split (":")[1]
    if(Number(hour) < 12)
        return `${hour}:${min} am`
    else if(Number(hour) === 12)
        return `${hour}:${min} pm`
    return `${Number(hour)-12}:${min} pm`
}