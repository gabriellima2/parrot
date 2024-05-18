/* eslint-disable no-unused-vars */
import type { SignUpSteps } from '@/schemas/sign-up-steps'
import type { SignUpFields } from '../../../schemas/sign-up.schema'

export type SignUpFormContextValues = {
	user: SignUpFields
	step: SignUpSteps
	forwardStep: (values: Partial<SignUpFields>) => void
	previousStep: () => void
}
