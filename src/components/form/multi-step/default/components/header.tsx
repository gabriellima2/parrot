import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type HeaderProps = HTMLAttributes<HTMLElement>

export function Header(props: HeaderProps) {
	const { className, ...rest } = props
	return (
		<header className={cn('flex flex-col gap-1 pb-6', className)} {...rest} />
	)
}
