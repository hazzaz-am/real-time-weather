import { useContext } from "react";
import { LocationContext } from "../contexts";

export function useLocationContext() {
	return useContext(LocationContext);
}
