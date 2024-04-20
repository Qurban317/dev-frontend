export const Pattern = {
	EMAIL_REGEX:
		"^(?=.{5,63}$)([-a-zA-Z0-9]{0,1})[-a-zA-Z0-9_+]+(\\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-_+]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{1,15})$",
	NUMERIC: "^[0-9][0-9]*$",
	ALPHANUMERIC: "^[a-zA-Z0-9@_.,/' s]*$",
	VIEW_DETAIL_REPORT: "Viewed detail report",
	ALPHA: "^[a-zA-Z s]*$",
	PHONE_REGEX: "^((d{3})sd{3}-d{4}$"
};

export const DateFields = {
	months: [
		{ value: "01", label: "January" },
		{ value: "02", label: "February" },
		{ value: "03", label: "March" },
		{ value: "04", label: "April" },
		{ value: "05", label: "May" },
		{ value: "06", label: "June" },
		{ value: "07", label: "July" },
		{ value: "08", label: "August" },
		{ value: "09", label: "September" },
		{ value: "10", label: "October" },
		{ value: "11", label: "November" },
		{ value: "12", label: "December" }
	]
};
