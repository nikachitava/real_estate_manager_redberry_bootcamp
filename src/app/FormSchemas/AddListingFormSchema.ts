import { z } from "zod";


export const AddListingFormSchema = z.object({
	is_rental: z.string(),
	address: z
		.string()
		.min(1, "მისამართის ველი სავალდებულოა")
		.min(2, "მინიმუმ 2 სიმბოლო"),
	zip_code: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({ required_error: "საფოსტო კოდის ველი სავალდებულოა", invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები" })),
	region_id: z.number().min(1, "რეგიონის არჩევა სავალდებულოა"),
	city_id: z.number().min(1, "ქალაქის არჩევა სავალდებულოა"),
	price: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({ required_error: "ფასის ველი სავალდებულოა", invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები" })),
	area: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({ invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები" })),
	bedrooms: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({ invalid_type_error: "შეიყვანეთ მხოლოდ მთელი რიცხვები" }).int({ message: "მხოლოდ მთელი რიცხვები" })),
	description: z
		.string()
		.min(1, "აღწერის ველი აუცილებელია")
		.refine(
			(text) => {
				const wordCount = text
					.split(/\s+/)
					.filter((word) => word.trim().length > 0).length;
				return wordCount >= 5;
			},
			{
				message: "მინიმუმ ხუთი სიტყვა",
			}
		),
	agent_id: z.number().min(1, "აგენტის არჩევა სავალდებულოა"),
	image: z.instanceof(FileList).refine(files => files.length > 0, {
		message: "ფოტო აუცილებელია",
	}),
});
