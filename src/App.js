import "./App.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
const apiKey = "21c260523c08557f008605faaf852e9a";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
          console.log(data);
        });
    }
  };
  return (
    <div className="app">
      <div className="body">
        <div className="app__searchbar">
          <input
            type="text"
            placeholder=" Enter the city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />

          <SearchIcon />
        </div>
        {typeof weather.main != "undefined" ? (
          <>
            <div className="app__temprature">
              <h3>{Math.round(weather.main.temp * 10) / 10} °C</h3>
            </div>
            <div className="app__location">
              <LocationOnIcon />
              {weather.name}, {weather.sys.country}
            </div>
            <div className="app__forecast">{weather.weather[0].main}</div>
         
          </>
        ) : (
          ''
        )}
        ;
      </div>
    </div>
  );
}

export default App;
