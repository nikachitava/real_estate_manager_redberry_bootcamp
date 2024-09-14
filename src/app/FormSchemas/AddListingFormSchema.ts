import { z } from "zod";

const minWords = (min: number) => (value: string) => {
	const wordCount = value.trim().split(/\s+/).length;
	if (wordCount < min) {
		return `მინიმუმ ${min} სიტყვა`;
	}
	return true;
};

export const AddListingFormSchema = z.object({
	is_rental: z.boolean({ required_error: "აირჩიეთ გარიგების ტიპი" }),
	address: z.string().min(2, "მინიმუმ 2 სიმბოლო"),
	zip_code: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({required_error: "საფოსტო ინდექსი აუცილებელია", invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები"})),

	region_id: z.number(),
	city_id: z.number(),
	price: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები"})),
	area: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები"})),
	bedrooms: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({ invalid_type_error: "შეიყვანეთ მხოლოდ მთელი რიცხვები"})),
	description: z
		.string({ required_error: "აღწერა აუცილებელია" })
		.refine(minWords(5), { message: "მინიმუმ 5 სიტყვა" }),
	image: z.string(),
	agent_id: z.number(),
});
