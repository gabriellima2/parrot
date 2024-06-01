import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type ListItemProps = HTMLAttributes<HTMLLIElement> & {
	label?: string
	value?: string
}

export function ListItem(props: ListItemProps) {
	const { className, label, value, children, ...rest } = props
	return (
		<li
			className={cn('col-span-full flex flex-col gap-1', className)}
			{...rest}
		>
			{children ? (
				children
			) : (
				<>
					<span>{label}</span>
					<p className="break-words">{value || 'Não informado'}</p>
				</>
			)}
		</li>
	)
}
