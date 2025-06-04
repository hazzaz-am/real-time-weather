import WeatherDashboard from "../components/dashboard/Weather";
import Header from "../components/header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <WeatherDashboard />
      </main>
    </>
  );
}