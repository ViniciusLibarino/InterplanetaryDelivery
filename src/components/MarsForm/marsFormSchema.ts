import {z} from 'zod';

export const marsFormSchema = z.object({
  planet: z.enum(['mars', 'mars']),
  addressName: z.string().nonempty('Endereço não pode ser vazio.'),
  addressLote: z
    .string()
    .nonempty('Endereço não pode ser vazio.')
    .max(4, 'O lote não pode ter mais de 4 caracteres.')
    .min(4, 'O lote não pode ter menos de 4 caracteres.'),
});

export type MarsFormSchema = z.infer<typeof marsFormSchema>;
