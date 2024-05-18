import { z } from 'zod'

export const SignUpStepsSchema = z
	.enum(['first', 'second', 'third', 'fourth'], {
		invalid_type_error: 'O passo selecionado é inválido',
	})
	.optional()
	.default('first')

export type SignUpSteps = z.infer<typeof SignUpStepsSchema>
