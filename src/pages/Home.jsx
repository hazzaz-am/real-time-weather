import { useEffect, useState } from "react";
import WeatherDashboard from "../components/dashboard/Weather";
import Header from "../components/header/Header";
import { useWeatherContext } from "../hooks";

import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

export default function HomePage() {
  const { weatherData, loading } = useWeatherContext()
  const [climateImage, setClimateImage] = useState("")

  useEffect(() => {
    function getBackgroundImage(climate) {
      switch (climate) {
        case "Rain":
          return RainyDayImage;
        case "Clouds":
          return ScatterdCloudsImage;
        case "Clear":
          return ClearSkyImage;
        case "Snow":
          return SnowImage;
        case "Thunder":
          return ThunderStormImage;
        case "Fog":
          return WinterImage;
        case "Haze":
          return FewCloudsImage;
        case "Mist":
          return MistImage;
        default:
          return ClearSkyImage;
      }
    }

    const bgImage = getBackgroundImage(weatherData.climate)
    setClimateImage(bgImage)

  }, [weatherData.climate])

  return (
    <>
      {
        loading.state ? (
          <div>
            <p>{loading.message}</p>
          </div>
        ) : (
          <div style={{
            backgroundImage: `url(${climateImage})`,
          }}
              className="bg-center bg-no-repeat bg-cover grid place-items-center"
          >
            <Header />
            <main className="py-32">
              <WeatherDashboard />
            </main>
          </div>
        )
      }

    </>
  );
}