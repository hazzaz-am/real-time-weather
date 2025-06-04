import cloud from "../assets/cloud.svg";
import hazeIcon from "../assets/haze.svg";
import rainyIcon from "../assets/rainy.svg";
import thunderIcon from "../assets/thunder.svg";
import sunnyIcon from "../assets/icons/sunny.svg";
import snowIcon from "../assets/icons/snow.svg";

export function getWeatherIcon(climate) {
	switch (climate) {
		case "Rain":
			return rainyIcon;
		case "Clouds":
			return cloud;
		case "Clear":
			return sunnyIcon;
		case "Snow":
			return snowIcon;
		case "Thunder":
			return thunderIcon;
		case "Fog":
			return hazeIcon;
		case "Haze":
			return hazeIcon;
		case "Mist":
			return hazeIcon;

		default:
			return sunnyIcon;
	}
}
