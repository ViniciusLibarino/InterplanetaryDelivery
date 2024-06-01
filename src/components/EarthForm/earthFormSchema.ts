import {z} from 'zod';

export const earthFormSchema = z.object({
  planet: z.enum(['earth']),
  addressName: z.string(),
  addressStreet: z.string(),
  addressNumber: z.string(),
  addressComplement: z.string(),
  addressDistrict: z.string(),
  addressCity: z.string(),
  addressState: z.string(),
  addressCountry: z.string(),
  addressZipCode: z.string(),
});

export type EarthFormSchema = z.infer<typeof earthFormSchema>;
