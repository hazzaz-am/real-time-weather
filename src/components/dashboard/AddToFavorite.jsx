import { useEffect, useState } from 'react';
import favoriteIcon from '../../assets/heart.svg'
import { useFavoriteContext, useWeatherContext } from '../../hooks';
import redHeart from '../../assets/heart-red.svg'

export default function AddToFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, handleAddFavorite, handleRemoveFavorite } = useFavoriteContext()
  const { weatherData } = useWeatherContext()

  const { latitude, longitude, location } = weatherData

  const handleToggleFavorite = () => {
    const findFavorite = favorites.find(item => item.location === location)
    if (!findFavorite) {
      handleAddFavorite(latitude, longitude, location)
    } else {
      handleRemoveFavorite(location)
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const findFavorite = favorites.find(item => item.location === location)
    if (findFavorite) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [location, favorites])

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button onClick={handleToggleFavorite} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer">
          <span>Add to Favorite</span>
          <img src={isFavorite ? redHeart : favoriteIcon} alt="Favorite Location" />
        </button>
      </div>
    </div>
  );
}