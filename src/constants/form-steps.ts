/* eslint-disable no-unused-vars */
import { SignUpSteps } from '@/schemas/sign-up-steps'

type Step<V> = { title: string; value: V }

export const FORM_STEPS = {
	SIGN_UP: {
		first: { title: 'Empresa', value: 'first' },
		second: { title: 'Contatos', value: 'second' },
		third: { title: 'Endereço', value: 'third' },
		fourth: { title: 'Perfil', value: 'fourth' },
	} as {
		[key in SignUpSteps]: Step<SignUpSteps>
	},
}
