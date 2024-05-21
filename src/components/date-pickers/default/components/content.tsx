import { forwardRef } from 'react'

import { PopoverContent } from '@/components/ui/popover'

export type ContentProps = Parameters<typeof PopoverContent>[0]
export type ContentElement = HTMLDivElement

export const Content = forwardRef<ContentElement, ContentProps>(
	(props, ref) => {
		return <PopoverContent {...props} ref={ref} />
	}
)

Content.displayName = 'DatePicker.Default.Content'
