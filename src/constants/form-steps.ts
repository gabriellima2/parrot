/* eslint-disable no-unused-vars */
import { SignUpSteps } from '@/schemas/sign-up-steps'

type Step<V> = { title: string; value: V }

export const FORM_STEPS = {
	SIGN_UP: {
		first: { title: 'Empresa', value: 'first' },
		second: { title: 'Endereço', value: 'second' },
		third: { title: 'Perfil', value: 'third' },
		fourth: { title: 'Confirmação', value: 'fourth' },
	} as {
		[key in SignUpSteps]: Step<SignUpSteps>
	},
}
