import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField } from '@/components/ui/form'
import { MultiStepForm } from '@/components/multi-step-form'
import { InputPassword } from '@/components/input-password'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/field'

import { useSignUpFormContext } from '@/modules/auth/sign-up/contexts/sign-up-form.context'

import { initializaThirdStepFields } from '@/modules/auth/sign-up/helpers/initialize-third-step-fields'
import { cellPhoneMask, phoneMask } from '@/helpers/masks'

import {
	SignUpThirdStepSchema,
	type SignUpThirdStepFields,
} from '@/modules/auth/sign-up/schemas/sign-up.schema'
import { FIELD_LABELS } from '@/modules/auth/sign-up/constants/field-labels'

export function SignUpFormThirdStep() {
	const { user, forwardStep, previousStep } = useSignUpFormContext()
	const form = useForm<SignUpThirdStepFields>({
		defaultValues: initializaThirdStepFields(user),
		resolver: zodResolver(SignUpThirdStepSchema),
	})
	return (
		<MultiStepForm.Root>
			<MultiStepForm.Header>
				<MultiStepForm.Title>Dados do perfil</MultiStepForm.Title>
				<MultiStepForm.Description>
					Mostre sua essência! Configure o perfil da empresa para refletir seus
					valores e objetivos.
				</MultiStepForm.Description>
			</MultiStepForm.Header>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(forwardStep)}>
					<MultiStepForm.Grid.Root>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.username}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Lopes Teodoro Empreendimentos EPP"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.email}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: empreendimentos.lopes@geradornv.com.br"
												disabled
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="password_group.password"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.password_group.password}
										</Field.Label>
										<FormControl>
											<InputPassword
												id={field.name}
												placeholder="Digite uma senha"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="password_group.password_confirmation"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.password_group.confirm_password}
										</Field.Label>
										<FormControl>
											<InputPassword
												id={field.name}
												placeholder="Digite a senha novamente"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2 lg:col-span-1">
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.phone}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={phoneMask}
												placeholder="Ex: (13) 3626-7236"
												disabled={!!form.formState.defaultValues?.phone}
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2 lg:col-span-1">
							<FormField
								control={form.control}
								name="cell_phone"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.cell_phone}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={cellPhoneMask}
												placeholder="Ex: (16) 99913-7752"
												disabled
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="lg:col-span-2">
							<FormField
								control={form.control}
								name="website"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.website}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: https://empreendimentoslopes.com"
												disabled={!!form.formState.defaultValues?.website}
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.description} (opcional)
										</Field.Label>
										<FormControl>
											<Textarea
												id={field.name}
												placeholder="Ex: Bem-vindo à nossa empresa! Aqui, acreditamos em [valores] e nos esforçamos para [objetivos]. Nossa missão é [missão da empresa]. Sinta-se à vontade para explorar mais sobre nós e descobrir como podemos ajudá-lo"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
					</MultiStepForm.Grid.Root>
					<MultiStepForm.Footer>
						<MultiStepForm.PreviousStep type="button" onClick={previousStep} />
						<MultiStepForm.ForwardStep type="submit" />
					</MultiStepForm.Footer>
				</form>
			</Form>
		</MultiStepForm.Root>
	)
}
