import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type AsideProps = HTMLAttributes<HTMLElement>

export function Aside(props: AsideProps) {
	const { className, ...rest } = props
	return (
		<aside
			className={cn(
				'w-full overflow-x-auto justify-normal flex-col h-full bg-muted p-4 lg:p-6 rounded-3xl',
				className
			)}
			{...rest}
		/>
	)
}
