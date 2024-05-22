import { cn } from '@/helpers/cn'

type StepProps = {
	count: number
	title: string
	isCompleted?: boolean
	isActive?: boolean
}

export function Step(props: StepProps) {
	const { title, count, isCompleted, isActive } = props
	const active = isActive || isCompleted
	return (
		<div className="flex items-center flex-col gap-2 md:gap-4 md:flex-row">
			<div
				className={cn(
					'flex items-center justify-center size-4 md:size-11 md:min-w-11 md:min-h-11 rounded-full border border-primary font-medium',
					{ 'bg-primary': active }
				)}
			>
				<span
					className={cn('hidden md:inline-block', {
						'text-primary-foreground': active,
					})}
				>
					{count}
				</span>
			</div>
			<div className="flex flex-col">
				<small className="text-muted-foreground hidden md:inline-block">
					Passo {count}
				</small>
				<p className="font-medium text-xs md:text-base">{title}</p>
			</div>
		</div>
	)
}
