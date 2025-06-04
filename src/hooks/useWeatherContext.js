import { useContext } from "react";
import { WeatherContext } from "../contexts";

export function useWeatherContext() {
	return useContext(WeatherContext);
}
