import { z } from 'zod';
const guestTypes = ['gast'] as const;
const playerTypes = ['blaeser', 'jungblaeser'] as const;
export const userTypes = [...playerTypes, ...guestTypes];
export const voices = ['sopran', 'alt', 'tenor', 'bass'] as const;

const guestSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	address: z.string(),
	zip_city: z.string(),
	type: z.enum(guestTypes),
	choir: z.string().optional(),
	departure: z.string(),
	'frc-captcha-solution': z.string().optional()
});
const playerSchema = guestSchema.extend({
	type: z.enum(playerTypes),
	voice: z.enum(voices)
});

export const userSchema = z.union([guestSchema, playerSchema]);
export type User = z.infer<typeof userSchema>;
