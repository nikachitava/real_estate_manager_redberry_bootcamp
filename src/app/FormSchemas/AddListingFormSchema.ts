import { z } from "zod";

const minWords = (min: number) => (value: string) => {
	const wordCount = value.trim().split(/\s+/).length;
	if (wordCount < min) {
		return `მინიმუმ ${min} სიტყვა`;
	}
	return true;
};

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

export const AddListingFormSchema = z.object({
	is_rental: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number()),
	address: z.string().min(2, "მინიმუმ 2 სიმბოლო"),
	zip_code: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({ required_error: "საფოსტო ინდექსი აუცილებელია", invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები" })),

	region_id: z.number(),
	city_id: z.number(),
	price: z.preprocess((value) => {
		if (typeof value === "string") {
			const numberValue = parseFloat(value);
			return isNaN(numberValue) ? undefined : numberValue;
		}
		return value;
	}, z.number({ invalid_type_error: "შეიყვანეთ მხოლოდ რიცხვები" })),
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
	}, z.number({ invalid_type_error: "შეიყვანეთ მხოლოდ მთელი რიცხვები" })),
	description: z
		.string({ required_error: "აღწერა აუცილებელია" })
		.refine(minWords(5), { message: "მინიმუმ 5 სიტყვა" }),
	image: z
		.instanceof(File, {
			message: "გთხოვთ ატვირთოთ ფოტო",
		})
		.refine((file) => file.size <= MAX_FILE_SIZE, {
			message: "ფოტოს მაქსიმალური ზომა 1 MB",
		})
		.refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
			message: "ატვირთეთ ვალიდური ფორმატი (JPEG, PNG, ან WebP).",
		}),

	agent_id: z.number(),
});
