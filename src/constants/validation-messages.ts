export const VALIDATION_MESSAGES = {
	INVALID_TYPE_ERROR: (field: string) =>
		`Por favor, digite um valor válido para ${field}`,
	REQUIRED_ERROR: (field: string) => `O campo ${field} é obrigatório`,
	MAX_LENGTH: (field: string, maxLength: number) =>
		`O campo ${field} deve conter no máximo ${maxLength} caracteres `,
	MIN_LENGTH: (field: string, minLength: number) =>
		`O campo ${field} deve conter no mínimo ${minLength} caracteres `,
}
