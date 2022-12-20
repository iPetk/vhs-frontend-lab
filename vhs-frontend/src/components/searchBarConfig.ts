import { z } from 'zod';

export const searchBarDefaultValues: SearchFormInput = {
  queryType: 'title',
  queryValue: '',
};

export const searchFormSchema = z.object({
  queryType: z.union([z.literal('title'), z.literal('description'), z.literal('genre')]),
  queryValue: z.string().optional(),
});

export type SearchFormInput = z.infer<typeof searchFormSchema>;
