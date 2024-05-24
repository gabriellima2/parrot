import { forwardRef } from 'react'

import { CalendarProps } from './default/components/calendar'
import { Field } from '@/components/field'
import { DatePickers } from '.'

export type CommonPresetProps = CalendarProps & {
	value?: string
	label?: string
	placeholder?: string
}

const CommonPreset = forwardRef<HTMLButtonElement, CommonPresetProps>(
	(props, ref) => {
		const { value, id, label, placeholder, ...rest } = props
		return (
			<>
				{label && <Field.Label htmlFor={id}>{label}</Field.Label>}
				<DatePickers.WithPreset.Root>
					<DatePickers.WithPreset.Trigger
						date={value}
						id={id}
						ref={ref}
						placeholder={placeholder}
					/>
					<DatePickers.WithPreset.Content>
						<DatePickers.WithPreset.Calendar {...rest} value={value} />
					</DatePickers.WithPreset.Content>
				</DatePickers.WithPreset.Root>
			</>
		)
	}
)

CommonPreset.displayName = 'CommonPreset'

export default CommonPreset
