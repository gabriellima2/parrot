import { toast } from 'react-toastify'

type NotifyOptions = {
	type: 'default' | 'error' | 'info' | 'success' | 'warning'
	id?: string
}

export function useToast() {
	function notify(message: string, options?: NotifyOptions) {
		toast(message, {
			type: options?.type,
			toastId: options?.id,
			position: 'top-right',
			draggable: true,
		})
	}
	return {
		notify,
	}
}
