import {z} from 'zod'

const minWords = (min: number) => (value: string) => {
    const wordCount = value.trim().split(/\s+/).length;
    if (wordCount < min) {
      return `მინიმუმ ${min} სიტყვა`;
    }
    return true;
  };

export const AddListingFormSchema = z.object({
    is_rental: z.boolean({required_error: "აირჩიეთ გარიგების ტიპი"}),
    address: z.string().min(2, "მინიმუმ 2 სიმბოლო"),
    zip_code: z.number({required_error: "საფოსტო ინდექსი აუცილებელია", invalid_type_error: "მხოლოდ რიცხვები"}),
    region_id: z.number(),
    city_id: z.number(),
    price: z.number().positive("შეიყვანეთ სწორი ფასი").min(0.01, "მინიმუმ 0.01"),
    area: z.number().positive("შეიყვანეთ სწორი ფართობი").min(0.01, "მინიმუმ 0.01"),
    bedrooms: z.number({invalid_type_error: "მხოლოდ რიცხვები"}).positive("შეიყვანეთ სწორი რაოდენობა").min(1, "მინიმუმ 1"),
    description: z.string().refine(minWords(5), { message: "მინიმუმ 5 სიტყვა" }),
    image: z.string(),
    agent_id: z.number(),
})
