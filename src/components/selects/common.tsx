import { forwardRef } from 'react'

import { cn } from '@/helpers/cn'
import { Label } from '../ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectProps,
} from '../ui/select'

export type CommonProps = Omit<SelectProps, 'onValueChange'> & {
	id?: string
	label?: string
	options: { label: string; value: string | number }[]
	placeholder?: string
	onChange?: Pick<SelectProps, 'onValueChange'>['onValueChange']
	className?: string
}

const Common = forwardRef<HTMLButtonElement, CommonProps>((props, ref) => {
	const {
		id,
		label,
		options,
		className,
		defaultValue,
		placeholder,
		onChange,
		...rest
	} = props
	return (
		<div className={cn('space-y-2', className)}>
			{label && <Label htmlFor={id}>{label}</Label>}
			<Select
				defaultValue={defaultValue?.toString() || ''}
				onValueChange={onChange}
				{...rest}
			>
				<SelectTrigger
					ref={ref}
					id={id}
					className={cn('w-full', { 'text-muted-foreground': !rest.value })}
				>
					<SelectValue placeholder={placeholder || 'Selecione...'} />
				</SelectTrigger>
				<SelectContent className="max-h-[256px]">
					{options.length ? (
						options.map((option) => (
							<SelectItem key={option.value} value={option.value.toString()}>
								{option.label}
							</SelectItem>
						))
					) : (
						<div className="w-full flex items-center justify-center">
							<span className="text-sm my-1 text-center">
								Nenhuma opção encontrada
							</span>
						</div>
					)}
				</SelectContent>
			</Select>
		</div>
	)
})

Common.displayName = 'Common'

export default Common
