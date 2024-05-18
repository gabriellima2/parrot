import { z } from 'zod'
import { PlanTypes } from '@/constants/plan-types'

export const PlanTypeSchema = z.enum(
	[PlanTypes.Community /*PlanTypes.Enterprise*/],
	{
		invalid_type_error: 'O plano selecionado é inválido',
		required_error: 'Por favor, selecione um plano',
	}
)
