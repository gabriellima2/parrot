import { Step } from './components/step'
import { cn } from '@/helpers/cn'

type ProgressProps = {
	step: string
	completedSteps: string[]
	steps: { title: string; value: string }[]
	className?: string
}

export function Progress(props: ProgressProps) {
	const { steps, step, completedSteps, className } = props
	return (
		<ul className={cn('flex flex-col gap-6', className)}>
			{steps.map(({ title, value }, i) => (
				<li key={value}>
					<Step
						count={++i}
						title={title}
						isActive={value === step}
						isCompleted={completedSteps.includes(value)}
					/>
				</li>
			))}
		</ul>
	)
}