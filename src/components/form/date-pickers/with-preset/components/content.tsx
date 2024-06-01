import { forwardRef } from 'react'

import { PopoverContent } from '@/components/ui/popover'
import { cn } from '@/helpers/cn'

export type ContentProps = Parameters<typeof PopoverContent>[0]
export type ContentElement = HTMLDivElement

export const Content = forwardRef<ContentElement, ContentProps>(
	(props, ref) => {
		const { className, ...rest } = props
		return (
			<PopoverContent {...rest} className={cn('p-0', className)} ref={ref} />
		)
	}
)

Content.displayName = 'DatePicker.Default.Content'
