import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./searchBox.css";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let handleSearch = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        feelsLike: jsonResponse.main.feels_like,
        humadity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(false);
      console.log("searching for ", city);
      setCity("");
      let newInfo = await handleSearch();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <br></br>
      <TextField
        id="outlined-basic"
        label="city name"
        variant="outlined"
        value={city}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <Button variant="contained" onClick={handleSubmit}>
        city name
      </Button>
      {error && (
        <p style={{ color: "red" }}>There is no such place in our API</p>
      )}
    </div>
  );
}
