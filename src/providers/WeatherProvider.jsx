import { WeatherContext } from "../contexts";
import { useWeather } from "../hooks/useWeather";

export default function WeatherProvider({ children }) {
  const { error, loading, weatherData } = useWeather()
  return (
    <WeatherContext.Provider value={{ error, loading, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}