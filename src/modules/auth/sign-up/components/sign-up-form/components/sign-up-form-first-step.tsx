import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField } from '@/components/ui/form'
import { DatePickers } from '@/components/form/date-pickers'
import { MultiStep } from '@/components/form/multi-step'
import { Fields } from '@/components/boilerplate/fields'
import { Grids } from '@/components/boilerplate/grids'
import { Input } from '@/components/ui/input'

import { useSignUpFormContext } from '@/modules/auth/sign-up/contexts/sign-up-form.context'

import { initializaFirstStepFields } from '@/modules/auth/sign-up/helpers/initialize-first-step-fields'
import { cellPhoneMask, cnpjMask, phoneMask } from '@/helpers/masks'

import {
	SignUpFirstStepSchema,
	type SignUpFirstStepFields,
} from '@/modules/auth/sign-up/schemas/sign-up.schema'
import { FIELD_LABELS } from '@/modules/auth/sign-up/constants/field-labels'

export function SignUpFormFirstStep() {
	const { user, forwardStep } = useSignUpFormContext()
	const form = useForm<SignUpFirstStepFields>({
		defaultValues: initializaFirstStepFields(user),
		resolver: zodResolver(SignUpFirstStepSchema),
	})
	return (
		<MultiStep.Default.Root>
			<MultiStep.Default.Header>
				<MultiStep.Default.Title>Dados da Empresa</MultiStep.Default.Title>
				<MultiStep.Default.Description>
					Preencha as informações da sua empresa para configurar sua conta.
				</MultiStep.Default.Description>
			</MultiStep.Default.Header>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(forwardStep)}>
					<Grids.Default.Root>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.name}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Lopes Teodoro Empreendimentos EPP"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="business_name"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.business_name}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Empreendimentos Lopes"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2 md:col-span-1">
							<FormField
								control={form.control}
								name="cnpj"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.cnpj}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: 32.371.741/0001-75"
												mask={cnpjMask}
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2 md:col-span-1">
							<FormField
								control={form.control}
								name="state_registration"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.state_registration}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: 270.510.551.309"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="md:col-span-2">
							<FormField
								control={form.control}
								name="opening_date"
								render={({ field }) => (
									<Fields.Default.Root>
										<FormControl>
											<DatePickers.CommonPreset
												{...field}
												toYear={new Date().getFullYear()}
												fromYear={1900}
												id={field.name}
												label={FIELD_LABELS.FIRST_STEP.opening_date}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.phone}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={phoneMask}
												placeholder="Ex: (13) 3626-7236"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="cell_phone"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.cell_phone}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={cellPhoneMask}
												placeholder="Ex: (16) 99913-7752"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.email}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: empreendimentos.lopes@geradornv.com.br"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item>
							<FormField
								control={form.control}
								name="website"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.website}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: https://empreendimentoslopes.com"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
					</Grids.Default.Root>
					<MultiStep.Default.Footer>
						<MultiStep.Default.PreviousStep disabled />
						<MultiStep.Default.ForwardStep type="submit" />
					</MultiStep.Default.Footer>
				</form>
			</Form>
		</MultiStep.Default.Root>
	)
}
