import type { DefaultValues } from 'react-hook-form'
import type {
	SignUpFields,
	SignUpSecondStepFields,
} from '../schemas/sign-up.schema'

export function initializaSecondStepFields(
	filledFields?: Partial<SignUpFields>
): DefaultValues<SignUpSecondStepFields> {
	return {
		zip_code: filledFields?.zip_code || '',
		city: filledFields?.city || '',
		street: filledFields?.street || '',
		district: filledFields?.district || '',
		state: filledFields?.state || '',
		number: filledFields?.number || '',
		complement: filledFields?.complement || '',
	}
}
