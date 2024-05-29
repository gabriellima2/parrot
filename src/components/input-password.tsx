'use client'
import { forwardRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { Input, type InputProps } from './ui/input'
import { cn } from '@/helpers/cn'

export type InputPasswordProps = Omit<InputProps, 'type'> & {
	classNameWrapper?: string
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
	(props, ref) => {
		const { className, classNameWrapper, ...rest } = props
		const [isVisible, setIsVisible] = useState(false)

		function handleToggleVisibility() {
			setIsVisible((prevState) => !prevState)
		}

		const visibilityStateMessage = isVisible ? 'Esconder senha' : 'Ver senha'

		return (
			<div className={cn('relative', classNameWrapper)}>
				<Input
					type={isVisible ? 'text' : 'password'}
					ref={ref}
					autoCorrect="false"
					autoComplete="off"
					className={cn('pr-10', className)}
					{...rest}
				/>
				<button
					type="button"
					aria-pressed={isVisible}
					onClick={handleToggleVisibility}
					title={visibilityStateMessage}
					aria-label={visibilityStateMessage}
					className="absolute bottom-1/2 right-3 translate-y-1/2 pl-3"
				>
					{isVisible ? (
						<EyeOff className="w-4 h-4 min-w-4 min-h-4 text-foreground" />
					) : (
						<Eye className="w-4 h-4 min-w-4 min-h-4 text-foreground" />
					)}
				</button>
			</div>
		)
	}
)

InputPassword.displayName = 'Inputs.InputPassword'
