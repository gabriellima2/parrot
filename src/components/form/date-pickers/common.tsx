import { forwardRef } from 'react'

import { CalendarProps } from './default/components/calendar'
import { Fields } from '@/components/boilerplate/fields'
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
			{label && (
				<Fields.Default.Label htmlFor={id}>{label}</Fields.Default.Label>
			)}
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
