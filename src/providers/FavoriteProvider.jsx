import { FavoriteContext } from "../contexts";
import { useLocalStorage } from "../hooks";

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", [])

  const handleAddFavorite = (latitude, longitude, location) => {
    setFavorites([...favorites, { latitude, longitude, location }])
  }

  const handleRemoveFavorite = (location) => {
    const filteredFavorites = favorites.filter(favorite => favorite.location !== location)
    setFavorites(filteredFavorites)
  }

  return (
    <FavoriteContext.Provider value={{ favorites, handleAddFavorite, handleRemoveFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}