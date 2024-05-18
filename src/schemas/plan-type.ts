import { z } from 'zod'

export const PlanTypeSchema = z.enum(['community', 'enterprise'], {
	invalid_type_error: 'O plano selecionado é inválido',
	required_error: 'Por favor, selecione um plano',
})

export type PlanTypes = z.infer<typeof PlanTypeSchema>
