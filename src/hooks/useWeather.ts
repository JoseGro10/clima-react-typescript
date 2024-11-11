import axios from 'axios'
import { SearchType } from '../types'
import { object, string, number, InferOutput, parse } from 'valibot' 


// Valibot npm i valibot
const WeatherSchema = object({
    name: string(),
    main: object({
        temp: number(),
        temp_max: number(),
        temp_min: number()
    })
})

type Weather = InferOutput<typeof WeatherSchema>

export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = import.meta.env.VITE_API_KEY

        try{
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl)
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            //Valibot
            const {data: weatherResult} = await axios(weatherUrl)
            const result = parse(WeatherSchema, weatherResult)
            console.log(result)
        }catch (error){
            console.log(error)
        }

        console.log('Consultando...')
    }

    return{
        fetchWeather
    }
}