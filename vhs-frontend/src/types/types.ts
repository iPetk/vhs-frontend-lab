import { z } from "zod";

const MAX_FILE_SIZE = 300000; //bytes
const RELEASE_YEAR_MIN = 1880;
const RELEASE_YEAR_MAX = new Date().getFullYear();
const ACCEPTED_IMAGE_TYPES = [
  "image/svg+xml",
  "image/bmp",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export type VHS = Omit<VhsFormType, "thumbnail"> & {
  id: number;
  quantity: number;
  thumbnail: string;
};

export const vhsFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  genre: z.string().min(1, "Genre is required"),
  duration: z
    .number({ invalid_type_error: "Duration must be a number" })
    .int()
    .positive("Duration must be greater than 0"),
  releasedAt: z
    .number({ invalid_type_error: "Release date must be a number" })
    .int()
    .gte(
      RELEASE_YEAR_MIN,
      "Please check this info - film wasn't invented until the 1880s"
    )
    .lte(RELEASE_YEAR_MAX, "Are you a time traveler?")
    .nonnegative("Release year can't be negative"),
  rentalPrice: z
    .number({ invalid_type_error: "Price must be a number" })
    .int()
    .nonnegative("Price can't be negative"),
  rentalDuration: z
    .number({ invalid_type_error: "Rental duration must be a number" })
    .int()
    .positive("Rental duration must be greater than 1"),
  thumbnail: z
    .custom<FileList>()
    .refine((files) => {
      if (!files.length) return true;
      return files[0].size <= MAX_FILE_SIZE;
    }, "Max file size is 3MB.")
    .refine(
      (files) => {
        if (!files.length) return true;
        return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
      },
      {
        message: "Image must be .bmp, .jpg, .jpeg, .png, .svg or .webp ",
      }
    )
    .optional(),
});

export type VhsFormType = z.infer<typeof vhsFormSchema>;
