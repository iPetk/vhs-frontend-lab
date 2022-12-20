import { z } from 'zod';

export const searchBarDefaultValues: SearchFormInput = {
  queryType: 'title',
  queryValue: '',
};

export const searchFormSchema = z.object({
  queryType: z.enum(['title', 'description', 'genre']),
  queryValue: z.string().optional(),
});

export type SearchFormInput = z.infer<typeof searchFormSchema>;
