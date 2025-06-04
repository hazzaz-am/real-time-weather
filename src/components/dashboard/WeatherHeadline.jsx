
import pinIcon from '../../assets/pin.svg'
import { useWeatherContext } from '../../hooks/useWeatherContext';
import { formatDate } from '../../utils/formatDate';
import { getWeatherIcon } from '../../utils/getWeatherIcon'

export default function WeatherHeadline() {
  const { weatherData } = useWeatherContext();
  const { climate, location, temperature, time } = weatherData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt='Pin Location' />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{formatDate(time, "date", false)} - {formatDate(time, "time", false)}</p>
    </div>
  );
}