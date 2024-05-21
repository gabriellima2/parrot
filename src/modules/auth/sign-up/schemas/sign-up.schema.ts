import { z } from 'zod'
import { PlanTypeSchema } from '@/schemas/plan-type'

export const SignUpSchema = z.object({
	name: z.string(),
	business_name: z.string(),
	cnpj: z.string(),
	state_registration: z.string().optional(),
	opening_date: z.string().optional(),
	plan: PlanTypeSchema,
})

export type SignUpFields = z.infer<typeof SignUpSchema>
