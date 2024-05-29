import type { DefaultValues } from 'react-hook-form'
import type {
	SignUpFields,
	SignUpThirdStepFields,
} from '../schemas/sign-up.schema'

export function initializaThirdStepFields(
	filledFields?: Partial<SignUpFields>
): DefaultValues<SignUpThirdStepFields> {
	return {
		username: filledFields?.business_name || '',
		cell_phone: filledFields?.cell_phone || '',
		email: filledFields?.email || '',
		phone: filledFields?.phone || '',
		website: filledFields?.website || '',
		description: filledFields?.description || '',
		password_group: {
			password: filledFields?.password_group?.password || '',
			password_confirmation:
				filledFields?.password_group?.password_confirmation || '',
		},
	}
}
