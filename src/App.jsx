import HomePage from "./pages/Home";
import { FavoriteProvider, WeatherProvider } from "./providers";

export default function App() {
  return (
    <>
      <WeatherProvider>
        <FavoriteProvider>
          <HomePage />
        </FavoriteProvider>
      </WeatherProvider>
    </>
  );
}