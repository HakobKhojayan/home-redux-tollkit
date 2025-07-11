import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadWeatherSlice } from "../../redux/weatherSlice/weatherSlice";



export default function Home() {
    const [data, setData] = useState({});
    const weatherData = useSelector(state => state.weather?.data)

    const dispatch = useDispatch()

    useEffect(() => {
        if(weatherData){
            setData(weatherData)
        }
    },[weatherData])

    useEffect(() => {
        dispatch(loadWeatherSlice("cb36d56d59a6202351fe6cff27d8977a", "yerevan"))
    },[dispatch])

    console.log(weatherData,"data");
    
    return (
        <div>
            <h1 className="text-[24px]">Hello, Weather</h1>
            {data && (
                <div>
                    <p>Temp: {data.main?.temp_min}</p>
                    <p>City: {data.city?.name}</p>
                </div>
            )}
        </div>
    )
}