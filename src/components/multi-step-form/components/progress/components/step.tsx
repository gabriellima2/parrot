import { cn } from '@/helpers/cn'

type StepProps = {
	count: number
	title: string
	isCompleted?: boolean
	isActive?: boolean
}

export function Step(props: StepProps) {
	const { title, count, isCompleted, isActive } = props
	return (
		<div className="flex items-center gap-4">
			<div
				className={cn(
					'flex items-center justify-center size-11 min-w-11 min-h-11 rounded-full border border-primary font-medium',
					{
						'bg-primary text-primary-foreground': isActive || isCompleted,
					}
				)}
			>
				{count}
			</div>
			<div className="lg:flex flex-col hidden">
				<small className="text-muted-foreground">Passo {count}</small>
				<span className="font-medium">{title}</span>
			</div>
		</div>
	)
}
