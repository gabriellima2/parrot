'use client'

import { useRouter } from 'next/navigation'

type ErrorProps = {
	reset: () => void
}

export default function Error(props: ErrorProps) {
	const { reset } = props
	const { back } = useRouter()
	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={() => back()}>Back</button>
			<button onClick={() => reset()}>Try again</button>
		</div>
	)
}
