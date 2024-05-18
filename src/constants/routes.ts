import type { SignUpSteps } from '@/schemas/sign-up-steps'
import type { PlanTypes } from '@/schemas/plan-type'

export const ROUTES = {
	AUTH: {
		SIGN_UP: (plan: PlanTypes, step: SignUpSteps = 'first') =>
			`/auth/sign-up?p=${btoa(plan)}&step=${btoa(step)}`,
	},
}
