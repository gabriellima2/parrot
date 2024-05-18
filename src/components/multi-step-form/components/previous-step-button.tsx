import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/helpers/cn'

type PreviousStepButtonProps = ButtonProps

export function PreviousStepButton(props: PreviousStepButtonProps) {
	const {
		variant = 'secondary',
		children = 'Passo anterior',
		className,
		...rest
	} = props
	return (
		<Button
			{...rest}
			variant={variant}
			className={cn('max-w-[165px]', className)}
		>
			{children}
		</Button>
	)
}
