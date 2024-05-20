import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type FooterProps = HTMLAttributes<HTMLElement>

export function Footer(props: FooterProps) {
	const { className, ...rest } = props
	return <footer className={cn(className)} {...rest} />
}
