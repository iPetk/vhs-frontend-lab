import { t } from 'i18next';
import { z } from 'zod';

const MAX_FILE_SIZE = 300000; //bytes
const RELEASE_YEAR_MIN = 1880;
const RELEASE_YEAR_MAX = new Date().getFullYear();
const ACCEPTED_IMAGE_TYPES = [
  'image/svg+xml',
  'image/bmp',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export type VHS = Omit<VhsFormType, 'thumbnail'> & {
  id: number;
  quantity: number;
  thumbnail: string;
};

export const vhsFormSchema = z.object({
  title: z.string().min(1, `${t('validation errors.title')}`),
  description: z.string().min(1, `${t('validation errors.description')}`),
  genre: z.string().min(1, `${t('validation errors.genre')}`),
  duration: z
    .number({ invalid_type_error: `${t('validation errors.duration.number')}` })
    .int()
    .positive(`${t('validation errors.duration.positive')}`),
  releasedAt: z
    .number({ invalid_type_error: `${t('validation errors.release.number')}` })
    .int()
    .gte(RELEASE_YEAR_MIN, `${t('validation errors.release.min year')}`)
    .lte(RELEASE_YEAR_MAX, `${t('validation errors.release.max year')}`)
    .nonnegative(`${t('validation errors.release.negative')}`),
  rentalPrice: z
    .number({ invalid_type_error: `${t('validation errors.rental price.number')}` })
    .int()
    .nonnegative(`${t('validation errors.rental price.positive')}`),
  rentalDuration: z
    .number({ invalid_type_error: `${t('validation errors.rental duration.number')}` })
    .int()
    .positive(`${t('validation errors.rental duration.positive')}`),
  thumbnail: z
    .custom<FileList>()
    .refine((files) => {
      if (!files.length) return true;
      return files[0].size <= MAX_FILE_SIZE;
    }, `${t('validation errors.thumbnail.file size')}`)
    .refine(
      (files) => {
        if (!files.length) return true;
        return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
      },
      {
        message: `${t('validation errors.thumbnail.file type')}`,
      }
    )
    .optional(),
});

export type VhsFormType = z.infer<typeof vhsFormSchema>;
