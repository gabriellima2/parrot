import type { DefaultValues } from 'react-hook-form'
import type { SignUpFirstStepFields } from '../schemas/sign-up.schema'

export function initializaFirstStepFields(): DefaultValues<SignUpFirstStepFields> {
	return {
		business_name: '',
		cell_phone: '',
		cnpj: '',
		email: '',
		name: '',
		opening_date: '',
		phone: '',
		state_registration: '',
		website: '',
	}
}
