import { useCallback, useState } from 'react'

import { useToast } from './use-toast'
import { useViaCep } from './use-via-cep'

import { numbersMaskWithLimit } from '@/helpers/masks'
import { SearchViaCepOutputDTO } from '@/dtos/via-cep.dto'

export function useSearchZipCode() {
	const { search } = useViaCep()
	const { notify } = useToast()
	const [wasSuccessfulSearchingZipCode, setWasSuccessfulSearchingZipCode] =
		useState(false)

	const handleSearchZipCode = useCallback(
		async (
			zipCode: string,
			onSuccess?: (params: SearchViaCepOutputDTO) => void
		) => {
			const _zipCode = numbersMaskWithLimit(zipCode, 8)
			if (_zipCode.length !== 8) return
			const response = await search(_zipCode)
			if (response.success) {
				onSuccess && onSuccess(response.data)
				notify('CEP encontrado com sucesso!', { type: 'success' })
				setWasSuccessfulSearchingZipCode(true)
			}
			if (!response.success) {
				notify(response.error.message, { type: 'error' })
				setWasSuccessfulSearchingZipCode(false)
			}
		},
		[notify, search]
	)

	return {
		handleSearchZipCode,
		wasSuccessfulSearchingZipCode,
	}
}
