import { z } from 'zod'
import { PlanTypeSchema } from '@/schemas/plan-type'

export const SignUpSchema = z.object({
	plan: PlanTypeSchema,
})

export type SignUpFields = z.infer<typeof SignUpSchema>
