import { forwardRef } from 'react'

import { Selects } from '.'

import { STATES } from '@/constants/states'
import type { CommonProps as SelectCommonProps } from './common'

export type StateProps = Omit<SelectCommonProps, 'options'>

const State = forwardRef<HTMLButtonElement, StateProps>((props, ref) => {
	return <Selects.Common {...props} options={STATES} ref={ref} />
})

State.displayName = 'State'

export default State
