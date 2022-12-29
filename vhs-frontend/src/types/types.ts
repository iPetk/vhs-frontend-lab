import { i18n } from '@i18n';
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
  title: z.string().min(1, i18n.t('validationErrors.title')),
  description: z.string().min(1, i18n.t('validationErrors.description')),
  genre: z.string().min(1, i18n.t('validationErrors.genre')),
  duration: z
    .number({ invalid_type_error: i18n.t('validationErrors.duration.number') })
    .int()
    .positive(i18n.t('validationErrors.duration.positive')),
  releasedAt: z
    .number({ invalid_type_error: i18n.t('validationErrors.release.number') })
    .int()
    .gte(RELEASE_YEAR_MIN, i18n.t('validationErrors.release.minYear'))
    .lte(RELEASE_YEAR_MAX, i18n.t('validationErrors.release.maxYear'))
    .nonnegative(i18n.t('validationErrors.release.negative')),
  rentalPrice: z
    .number({ invalid_type_error: i18n.t('validationErrors.rentalPrice.number') })
    .int()
    .nonnegative(i18n.t('validationErrors.rentalPrice.positive')),
  rentalDuration: z
    .number({ invalid_type_error: i18n.t('validationErrors.rentalDuration.number') })
    .int()
    .positive(i18n.t('validationErrors.rentalDuration.positive')),
  thumbnail: z
    .custom<FileList>()
    .refine((files) => {
      if (!files.length) return true;
      return files[0].size <= MAX_FILE_SIZE;
    }, i18n.t('validationErrors.thumbnail.fileSize'))
    .refine(
      (files) => {
        if (!files.length) return true;
        return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
      },
      {
        message: i18n.t('validationErrors.thumbnail.fileType'),
      }
    )
    .optional(),
});

export type VhsFormType = z.infer<typeof vhsFormSchema>;
