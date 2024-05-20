import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type RootProps = HTMLAttributes<HTMLElement>

export function Root(props: RootProps) {
	const { className, ...rest } = props
	return (
		<div
			className={cn(
				'h-screen lg:grid lg:grid-cols-[0.3fr_1fr] gap-6 p-4 lg:p-6',
				className
			)}
			{...rest}
		/>
	)
}
