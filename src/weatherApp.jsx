import { useState } from "react";
import SearchBox from "./searchBox.jsx";
import InfoBox from "./infoBox.jsx";
export default function WeatherApp() {
  const [weather, setWeather] = useState({
    city: "delhi",
    temp: 30,
    temp_max: 32,
    temp_min: 28,
    feelsLike: 29,
    humadity: 60,
    pressure: 1012,
    weather: "Clouds",
  });
 let updateInfo=(newInfo)=>{
    setWeather(newInfo);
 }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ASBM Weather Info App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <br></br>
      <InfoBox info={weather} />
    </div>
  );
}
