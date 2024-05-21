import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type FooterProps = HTMLAttributes<HTMLElement>

export function Footer(props: FooterProps) {
	const { className, ...rest } = props
	return (
		<footer
			className={cn(
				'w-full flex justify-end gap-4 pt-8 pb-4 flex-wrap',
				className
			)}
			{...rest}
		/>
	)
}
