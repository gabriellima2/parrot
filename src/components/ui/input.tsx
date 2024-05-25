import * as React from 'react'

import { cn } from '@/helpers/cn'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	mask?: (value: string) => string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, onChange, mask, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 read-only:opacity-50 read-only:pointer-events-none',
					className
				)}
				ref={ref}
				onChange={(e) => {
					if (!onChange) return
					if (mask)
						return onChange({
							...e,
							target: { ...e.target, value: mask(e.target.value) },
						})
					onChange(e)
				}}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
