import searchIcon from '../../assets/search.svg'
import { useDebounce, useLocationContext } from '../../hooks';
import { getLocationByName } from '../../data/location-data';

export default function SearchLocation() {
  const { setSelectedLocation } = useLocationContext()
  const debounce = useDebounce((term) => {
    const location = getLocationByName(term)
    setSelectedLocation(location)
  }, 500)

  const handleSearchLocation = (e) => {
    const term = e.target.value.toLowerCase()
    debounce(term)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search" placeholder="Search Location" required onChange={handleSearchLocation} />
        <button type="submit">
          <img src={searchIcon} alt='Search Icon' />
        </button>
      </div>
    </form>
  );
}