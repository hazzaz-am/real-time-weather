
import tempMaxIcon from '../../assets/icons/temp-max.svg'
import tempMinIcon from '../../assets/icons/temp-min.svg'
import humidityIcon from '../../assets/icons/humidity.svg'
import cloudyIcon from '../../assets/icons/cloud.svg'
import windIcon from '../../assets/icons/wind.svg'
import { useWeatherContext } from '../../hooks/useWeatherContext'

export default function WeatherCondition() {
  const { weatherData } = useWeatherContext();
  const { climate, max_temperature, min_temperature, humidity, cloudPercentage, wind } = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">Climate is <u><i>{climate}</i></u></p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(max_temperature)}°</p>
            <img src={tempMaxIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(min_temperature)}°</p>
            <img src={tempMinIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={humidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={cloudyIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(wind)}km/h</p>
            <img src={windIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}