import Link from 'next/link'
import { PlanTypes } from '@/constants/plan-types'

export default function Home() {
	return (
		<div>
			<Link href={`/auth/sign-up?p=${btoa(PlanTypes.Community)}`}>
				Community
			</Link>
			<Link href={`/auth/sign-up?p=${btoa(PlanTypes.Enterprise)}`}>
				Enterprise
			</Link>
		</div>
	)
}
