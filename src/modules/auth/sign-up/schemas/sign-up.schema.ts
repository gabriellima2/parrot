import { z } from 'zod'
import { isValid } from 'date-fns'
import { cnpj } from 'cpf-cnpj-validator'

import { VALIDATION_MESSAGES } from '@/constants/validation-messages'
import { FIELD_LABELS } from '../constants/field-labels'

import { PlanTypeSchema } from '@/schemas/plan-type'

export const SignUpFirstStepSchema = z.object({
	name: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.name
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.name
			),
		})
		.trim()
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(FIELD_LABELS.FIRST_STEP.name),
		})
		.max(255, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(
				FIELD_LABELS.FIRST_STEP.name,
				255
			),
		})
		.refine((value) => value.replaceAll(' ', '').length >= 3, {
			message: VALIDATION_MESSAGES.MIN_LENGTH(FIELD_LABELS.FIRST_STEP.name, 3),
		}),
	business_name: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.business_name
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.business_name
			),
		})
		.trim()
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.business_name
			),
		})
		.max(255, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(
				FIELD_LABELS.FIRST_STEP.business_name,
				255
			),
		})
		.refine((value) => value.replaceAll(' ', '').length >= 3, {
			message: VALIDATION_MESSAGES.MIN_LENGTH(
				FIELD_LABELS.FIRST_STEP.business_name,
				3
			),
		}),
	cnpj: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.cnpj
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.cnpj
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(FIELD_LABELS.FIRST_STEP.cnpj),
		})
		.length(18, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(FIELD_LABELS.FIRST_STEP.cnpj, 18),
		})
		.refine((data) => cnpj.isValid(data), {
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.cnpj
			),
		}),
	opening_date: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.opening_date
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.opening_date
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.opening_date
			),
		})
		.refine(
			(value) => {
				const parsedDate = new Date(value)
				return isValid(parsedDate)
			},
			{
				message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
					FIELD_LABELS.FIRST_STEP.opening_date
				),
			}
		),
	cell_phone: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.cell_phone
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.cell_phone
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.cell_phone
			),
		})
		.refine((value) => value.replaceAll(' ', '').length === 14, {
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.cell_phone
			),
		}),
	phone: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.phone
			),
		})
		.refine((value) => !value || value.replaceAll(' ', '').length === 13, {
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.phone
			),
		})
		.optional(),
	email: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.email
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.email
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.FIRST_STEP.email
			),
		})
		.max(255, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(
				FIELD_LABELS.FIRST_STEP.email,
				255
			),
		})
		.email({
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.email
			),
		}),
	state_registration: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.state_registration
			),
		})
		.optional(),
	website: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.website
			),
		})
		.optional()
		.refine((v) => !v || z.string().url().safeParse(v).success, {
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.FIRST_STEP.website
			),
		}),
})

export const SignUpSecondStepSchema = z.object({
	zip_code: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.SECOND_STEP.zip_code
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.zip_code
			),
		})
		.trim()
		.min(9, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.zip_code
			),
		})
		.max(9, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(
				FIELD_LABELS.SECOND_STEP.zip_code,
				9
			),
		})
		.refine((value) => value.replaceAll(' ', '').length >= 9, {
			message: VALIDATION_MESSAGES.LENGTH(FIELD_LABELS.SECOND_STEP.zip_code, 9),
		}),
	district: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.SECOND_STEP.district
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.district
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.district
			),
		}),
	city: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.SECOND_STEP.city
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.city
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.city
			),
		}),
	state: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.SECOND_STEP.state
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.state
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.state
			),
		}),
	street: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.SECOND_STEP.street
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.street
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.street
			),
		}),
	number: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.SECOND_STEP.number
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.number
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.SECOND_STEP.number
			),
		}),
	complement: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.SECOND_STEP.complement
			),
		})
		.optional(),
})

export const SignUpThirdStepSchema = z.object({
	username: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.username
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.THIRD_STEP.username
			),
		})
		.trim()
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.THIRD_STEP.username
			),
		})
		.max(255, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(
				FIELD_LABELS.THIRD_STEP.username,
				255
			),
		})
		.refine((value) => value.replaceAll(' ', '').length >= 3, {
			message: VALIDATION_MESSAGES.MIN_LENGTH(
				FIELD_LABELS.THIRD_STEP.username,
				3
			),
		}),
	cell_phone: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.cell_phone
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.THIRD_STEP.cell_phone
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.THIRD_STEP.cell_phone
			),
		})
		.refine((value) => value.replaceAll(' ', '').length === 14, {
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.cell_phone
			),
		}),
	phone: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.phone
			),
		})
		.refine((value) => !value || value.replaceAll(' ', '').length === 13, {
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.phone
			),
		})
		.optional(),
	email: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.email
			),
			required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.THIRD_STEP.email
			),
		})
		.min(1, {
			message: VALIDATION_MESSAGES.REQUIRED_ERROR(
				FIELD_LABELS.THIRD_STEP.email
			),
		})
		.max(255, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(
				FIELD_LABELS.THIRD_STEP.email,
				255
			),
		})
		.email({
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.email
			),
		}),
	password_group: z
		.object({
			password: z
				.string({
					invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
						FIELD_LABELS.THIRD_STEP.password_group.password
					),
					required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
						FIELD_LABELS.THIRD_STEP.password_group.password
					),
				})
				.min(1, {
					message: VALIDATION_MESSAGES.REQUIRED_ERROR(
						FIELD_LABELS.THIRD_STEP.password_group.password
					),
				})
				.max(45, {
					message: VALIDATION_MESSAGES.MAX_LENGTH(
						FIELD_LABELS.THIRD_STEP.password_group.password,
						45
					),
				})
				.refine((value) => value.length >= 8, {
					message: VALIDATION_MESSAGES.MIN_LENGTH(
						FIELD_LABELS.THIRD_STEP.password_group.password,
						8
					),
				}),
			password_confirmation: z
				.string({
					invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
						FIELD_LABELS.THIRD_STEP.password_group.confirm_password
					),
					required_error: VALIDATION_MESSAGES.REQUIRED_ERROR(
						FIELD_LABELS.THIRD_STEP.password_group.confirm_password
					),
				})
				.min(1, {
					message: VALIDATION_MESSAGES.REQUIRED_ERROR(
						FIELD_LABELS.THIRD_STEP.password_group.confirm_password
					),
				})
				.max(45, {
					message: VALIDATION_MESSAGES.MAX_LENGTH(
						FIELD_LABELS.THIRD_STEP.password_group.confirm_password,
						45
					),
				})
				.refine((value) => value.length >= 8, {
					message: VALIDATION_MESSAGES.MIN_LENGTH(
						FIELD_LABELS.THIRD_STEP.password_group.confirm_password,
						8
					),
				}),
		})
		.refine((data) => data.password === data.password_confirmation, {
			message: VALIDATION_MESSAGES.PASSWORD_CONFIRMATION,
			path: ['password_confirmation'],
		}),
	website: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.website
			),
		})
		.optional()
		.refine((v) => !v || z.string().url().safeParse(v).success, {
			message: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.website
			),
		}),
	description: z
		.string({
			invalid_type_error: VALIDATION_MESSAGES.INVALID_TYPE_ERROR(
				FIELD_LABELS.THIRD_STEP.description
			),
		})
		.trim()
		.max(400, {
			message: VALIDATION_MESSAGES.MAX_LENGTH(
				FIELD_LABELS.THIRD_STEP.description,
				400
			),
		})
		.refine((value) => !value || value.replaceAll(' ', '').length >= 3, {
			message: VALIDATION_MESSAGES.MIN_LENGTH(
				FIELD_LABELS.THIRD_STEP.description,
				3
			),
		}),
})

export const SignUpSchema = z
	.object({
		plan: PlanTypeSchema,
	})
	.merge(SignUpFirstStepSchema)
	.merge(SignUpSecondStepSchema)
	.merge(SignUpThirdStepSchema)

export type SignUpFields = z.infer<typeof SignUpSchema>
export type SignUpFirstStepFields = z.infer<typeof SignUpFirstStepSchema>
export type SignUpSecondStepFields = z.infer<typeof SignUpSecondStepSchema>
export type SignUpThirdStepFields = z.infer<typeof SignUpThirdStepSchema>
