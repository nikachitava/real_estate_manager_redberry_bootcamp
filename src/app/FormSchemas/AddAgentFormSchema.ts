import { z } from "zod";

export const addAgentFormSchema = z.object({
	name: z
		.string({ required_error: "ეს ველი აუცილებელია" })
		.min(2, "მინიმუმ 2 სიმბოლო"),
	surname: z
		.string({ required_error: "ეს ველი აუცილებელია" })
		.min(2, "მინიმუმ 2 სიმბოლო"),
	phone: z
		.string({ required_error: "ეს ველი აუცილებელია" })
		.regex(/^5/, "ტელეფონის ნომერი უნდა იწყებოდეს 5-ით")
		.max(9, "ნომერი უნდა შედგებოდეს 9 ციფრისგან"),
	email: z
		.string({ required_error: "ეს ველი აუცილებელია" })
		.email("ელ ფოსტა უნდა იყოს ვალიდური")
		.regex(/^.+@redberry\.ge$/, "ელ ფოსტა უნდა მთავრდებოდეს @redberry.ge"),
	avatar: z.instanceof(FileList).refine(files => files.length > 0, {
			message: "ფოტო აუცილებელია",
		}),
});
