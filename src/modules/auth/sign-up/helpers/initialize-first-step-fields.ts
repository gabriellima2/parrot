import type { DefaultValues } from 'react-hook-form'
import type {
	SignUpFields,
	SignUpFirstStepFields,
} from '../schemas/sign-up.schema'

export function initializaFirstStepFields(
	filledFields?: Partial<SignUpFields>
): DefaultValues<SignUpFirstStepFields> {
	return {
		business_name: filledFields?.business_name || '',
		cell_phone: filledFields?.cell_phone || '',
		cnpj: filledFields?.cnpj || '',
		email: filledFields?.email || '',
		name: filledFields?.name || '',
		opening_date: filledFields?.opening_date || '',
		phone: filledFields?.phone || '',
		state_registration: filledFields?.state_registration || '',
		website: filledFields?.website || '',
	}
}
