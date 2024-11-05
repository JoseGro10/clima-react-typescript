import axios from 'axios'
import { SearchType } from '../types'

export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = '12d27a6dfaa92dcd014e756608b9878d'

        try{
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl)
        }catch (error){
            console.log(error)
        }

        console.log('Consultando...')
    }

    return{
        fetchWeather
    }
}