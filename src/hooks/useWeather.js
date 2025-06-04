import { useEffect, useState } from "react";

export const useWeather = () => {
	const [weatherData, setWeatherData] = useState({
		location: "",
		climate: "",
		temperature: "",
		max_temperature: "",
		min_temperature: "",
		humidity: "",
		cloudPercentage: "",
		wind: "",
		time: "",
		longitude: "",
		latitude: "",
	});
	const [loading, setLoading] = useState({
		state: false,
		message: "",
	});
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading((prevLoading) => {
			return {
				...prevLoading,
				state: true,
				message: "Finding location...",
			};
		});

		const fetchWeatherData = async (latitude, longitude) => {
			try {
				setLoading((prevLoading) => {
					return {
						...prevLoading,
						state: true,
						message: "Fetching weather data...",
					};
				});
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
						import.meta.env.VITE_WEATHER_API_KEY
					}&units=metric`
				);
				if (!response.ok) {
					const errorMessage = `Fetching weather data failed: ${response.status}`;
					throw new Error(errorMessage);
				}
				const data = await response.json();

				setWeatherData((prevWeatherData) => {
					return {
						...prevWeatherData,
						location: data?.name,
						climate: data?.weather[0]?.main,
						temperature: data?.main?.temp,
						max_temperature: data?.main?.temp_max,
						min_temperature: data?.main?.temp_min,
						humidity: data?.main?.humidity,
						cloudPercentage: data?.clouds?.all,
						wind: data?.wind?.speed,
						time: data?.dt,
						longitude: longitude,
						latitude: latitude,
					};
				});
			} catch (error) {
				setError(error);
			} finally {
				setLoading((prevLoading) => {
					return {
						...prevLoading,
						state: false,
						message: "",
					};
				});
			}
		};

		navigator.geolocation.getCurrentPosition(function (position) {
			fetchWeatherData(position.coords.latitude, position.coords.longitude);
		});
	}, []);

	return {
		weatherData,
		loading,
		error,
	};
};
