import Link from 'next/link'

import { FORM_STEPS } from '@/constants/form-steps'
import { ROUTES } from '@/constants/routes'
import { PLANS } from '@/constants/plans'

export default function Home() {
	return (
		<div>
			<Link
				href={ROUTES.AUTH.SIGN_UP(
					PLANS.community,
					FORM_STEPS.SIGN_UP.first.value
				)}
			>
				Community
			</Link>
			<Link
				href={ROUTES.AUTH.SIGN_UP(
					PLANS.enterprise,
					FORM_STEPS.SIGN_UP.first.value
				)}
			>
				Enterprise
			</Link>
		</div>
	)
}
