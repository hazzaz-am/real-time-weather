import { useContext } from "react";
import { FavoriteContext } from "../contexts";

export function useFavoriteContext() {
	return useContext(FavoriteContext);
}
