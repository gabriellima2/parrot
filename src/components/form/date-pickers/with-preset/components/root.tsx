import { Popover } from '@/components/ui/popover'

export type RootProps = Parameters<typeof Popover>[0]

export function Root(props: RootProps) {
	return <Popover {...props} />
}
