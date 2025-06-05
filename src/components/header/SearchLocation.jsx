import { useState } from 'react';
import searchIcon from '../../assets/search.svg'
import { useLocationContext } from '../../hooks';
import { getLocationByName } from '../../data/location-data';

export default function SearchLocation() {
  const [searchTerm, setSearchTerm] = useState('')
  const { setSelectedLocation } = useLocationContext()

  const handleSearchLocation = (e) => {
    e.preventDefault()
    const location = getLocationByName(searchTerm)
    setSelectedLocation(location)
    setSearchTerm("")
  }
  
  return (
    <form onSubmit={handleSearchLocation}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search" placeholder="Search Location" required onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">
          <img src={searchIcon} alt='Search Icon' />
        </button>
      </div>
    </form>
  );
}