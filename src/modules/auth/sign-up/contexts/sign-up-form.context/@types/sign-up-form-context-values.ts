import type { SignUpSteps } from '@/schemas/sign-up-steps'
import type { SignUpFields } from '../../../schemas/sign-up.schema'

export type SignUpFormContextValues = {
	user: Partial<SignUpFields>
	step: SignUpSteps
	completedSteps: SignUpSteps[]
	forwardStep: (values: Partial<SignUpFields>) => void
	previousStep: () => void
}
