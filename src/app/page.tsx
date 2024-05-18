import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<Link href={`/auth/sign-up?p=${btoa('community')}&step=${btoa('first')}`}>
				Community
			</Link>
			<Link href={`/auth/sign-up?p=${btoa('enterprise')}`}>Enterprise</Link>
		</div>
	)
}
