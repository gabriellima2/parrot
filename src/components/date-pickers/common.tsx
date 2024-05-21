import { forwardRef } from 'react'

import { CalendarProps } from './default/components/calendar'
import { Field } from '@/components/field'
import { DatePickers } from '.'

export type CommonProps = CalendarProps & {
	value?: string
	label?: string
	placeholder?: string
}

const Common = forwardRef<HTMLButtonElement, CommonProps>((props, ref) => {
	const { value, id, label, placeholder, ...rest } = props
	return (
		<>
			{label && <Field.Label htmlFor={id}>{label}</Field.Label>}
			<DatePickers.Default.Root>
				<DatePickers.Default.Trigger
					date={value}
					id={id}
					ref={ref}
					placeholder={placeholder}
				/>
				<DatePickers.Default.Content>
					<DatePickers.Default.Calendar {...rest} value={value} />
				</DatePickers.Default.Content>
			</DatePickers.Default.Root>
		</>
	)
})

Common.displayName = 'Common'

export default Common
