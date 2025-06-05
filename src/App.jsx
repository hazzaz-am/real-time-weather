import HomePage from "./pages/Home";
import { FavoriteProvider, LocationProvider, WeatherProvider } from "./providers";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <HomePage />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}