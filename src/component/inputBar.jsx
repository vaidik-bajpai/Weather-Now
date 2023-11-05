export function InputBar({setCity}){
    function handleSubmit(e){
        if(e.key === "Enter"){
            setCity(e.currentTarget.value)
            e.currentTarget.value = ""
        }
    }
    return(
        <div>
            <input type="text" className="inputBar" onKeyDown={handleSubmit} placeholder="Search Location..."/>
        </div>
    )
}