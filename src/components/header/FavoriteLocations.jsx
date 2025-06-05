import favorite from '../../assets/heart.svg'

export default function FavoriteLocations({ onShow }) {
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={favorite} alt="Favorite Locations" />
        <span onClick={onShow} className='text-white'>Favorite Locations</span>
      </div>
    </>
  );
}