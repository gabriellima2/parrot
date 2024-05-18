/* eslint-disable no-unused-vars */
import { PlanTypes } from '@/schemas/plan-type'

export const PLANS: { [key in PlanTypes]: PlanTypes } = {
	community: 'community',
	enterprise: 'enterprise',
}
