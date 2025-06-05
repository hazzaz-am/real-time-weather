import { useEffect, useState } from "react";

/**
 *
 * @param {String} storageKey
 * @param {Array} defaultValue
 * @returns [Array, Function]
 */
export function useLocalStorage(storageKey, defaultValue) {
	const [value, setValue] = useState(
		JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
	);

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(value));
	}, [storageKey, value]);

	return [value, setValue];
}
