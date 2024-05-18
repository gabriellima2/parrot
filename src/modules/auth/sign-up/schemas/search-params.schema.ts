import { z } from 'zod'

import { SignUpStepsSchema } from '@/schemas/sign-up-steps'
import { PlanTypeSchema } from '@/schemas/plan-type'

export const SignUpSearchParamsSchema = z.object({
	p: PlanTypeSchema,
	step: SignUpStepsSchema,
})
