/**
 *
 * @param {String} value
 * @param {String} type
 * @param {Boolean} inMs
 * @returns Date or Time
 */
export function formatDate(value, type, inMs) {
	if (type === undefined) {
		return value;
	}

	if (!inMs) {
		value = value * 1000;
	}

	const date = new Date(value);
	let options;
	if (type === "date") {
		options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
	} else if (type === "time") {
		options = {
			hour: "numeric",
			minute: "numeric",
		};
	}

	return new Intl.DateTimeFormat("en-US", options).format(date);
}
