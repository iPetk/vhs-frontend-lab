import { number, z } from "zod";

export type VHS = VhsFormType & {
  id: number;
  quantity: number;
};

export const vhsFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  genre: z.string().min(1, "Genre is required"),
  duration: z
    .number({ invalid_type_error: "Duration must be a number" })
    .int()
    .nonnegative("Duration can't be negative"),
  releasedAt: z
    .number({ invalid_type_error: "Release date must be a number" })
    .int()
    .nonnegative("Release date can't be negative"),
  rentalPrice: z
    .number({ invalid_type_error: "Price must be a number" })
    .int()
    .nonnegative("Price can't be negative"),
  rentalDuration: z
    .number({ invalid_type_error: "Rental duration must be a number" })
    .int()
    .nonnegative("Rental duration can't be negative"),
  thumbnail: z.any().optional(),
});

export type VhsFormType = z.infer<typeof vhsFormSchema>;
