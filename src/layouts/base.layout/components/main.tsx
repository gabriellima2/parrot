import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type MainProps = HTMLAttributes<HTMLElement>

export function Main(props: MainProps) {
	const { className, ...rest } = props
	return <main className={cn(className)} {...rest} />
}
