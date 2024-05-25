export class ViaCepException extends Error {
	constructor(message?: string) {
		super(message || 'Erro ao consultar o CEP. Por favor, tente novamente.')
		this.name = 'ViaCepException'
	}
}
