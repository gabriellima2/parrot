/* eslint-disable no-unused-vars */
import { SignUpSteps } from '@/schemas/sign-up-steps'

export const FORM_STEPS = {
	SIGN_UP: { first: 'first', second: 'second', third: 'third' } as {
		[key in SignUpSteps]: SignUpSteps
	},
}
