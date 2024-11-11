import { Weather } from "../../types"

type WeatherDetailProps ={
    weather: Weather
}

export default function WeatherDetail({weather} : WeatherDetailProps) {
  return (
    <div>WeatherDetail</div>
  )
}
