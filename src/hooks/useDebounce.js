import { useEffect } from "react";
import { useRef } from "react";

export function useDebounce(callback, delay) {
	const timerIdRef = useRef(null);

	useEffect(() => {
		return () => {
			if (timerIdRef.current) {
				clearTimeout(timerIdRef.current);
			}
		};
	}, []);

	const debounceCallback = (...args) => {
		if (timerIdRef.current) {
			clearTimeout(timerIdRef.current);
		}
		timerIdRef.current = setTimeout(() => {
			callback(...args);
		}, delay);
	};

	return debounceCallback;
}
