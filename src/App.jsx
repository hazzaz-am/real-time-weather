import HomePage from "./pages/Home";
import { WeatherProvider } from "./providers";

export default function App() {
  return (
    <>
      <WeatherProvider>
        <HomePage />
      </WeatherProvider>
    </>
  );
}