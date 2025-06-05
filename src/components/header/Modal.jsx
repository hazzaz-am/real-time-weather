import { useFavoriteContext, useLocationContext } from "../../hooks";

export default function Modal() {
	const { favorites } = useFavoriteContext();
	const { setSelectedLocation } = useLocationContext()
	return (
		<div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
			<h3 className="text-lg font-bold px-4">Favorite Locations</h3>
			<ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
				{
					favorites.length > 0 ? (
						favorites.map((fav) => (
							<a onClick={(e) => {
								e.preventDefault()
								setSelectedLocation({ ...fav })
							}} className="flex flex-col hover:bg-gray-200">
								<li key={fav.location}>
									{fav.location}
								</li>
							</a>
						))
					) : (
						<li className="hover:bg-gray-200">No favorite location found</li>
					)
				}
			</ul>
		</div>
	);
}