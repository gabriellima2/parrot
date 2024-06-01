import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField } from '@/components/ui/form'
import { Fields } from '@/components/boilerplate/fields'
import { MultiStep } from '@/components/form/multi-step'
import { Grids } from '@/components/boilerplate/grids'
import { Textarea } from '@/components/ui/textarea'
import { Inputs } from '@/components/form/inputs'
import { Input } from '@/components/ui/input'

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
		<MultiStep.Default.Root>
			<MultiStep.Default.Header>
				<MultiStep.Default.Title>Dados do perfil</MultiStep.Default.Title>
				<MultiStep.Default.Description>
					Mostre sua essência! Configure o perfil da empresa para refletir seus
					valores e objetivos.
				</MultiStep.Default.Description>
			</MultiStep.Default.Header>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(forwardStep)}>
					<Grids.Default.Root>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.username}
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
								name="email"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.email}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: empreendimentos.lopes@geradornv.com.br"
												disabled
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
								name="password_group.password"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.password_group.password}
										</Fields.Default.Label>
										<FormControl>
											<Inputs.Password
												id={field.name}
												placeholder="Digite uma senha"
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
								name="password_group.password_confirmation"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.password_group.confirm_password}
										</Fields.Default.Label>
										<FormControl>
											<Inputs.Password
												id={field.name}
												placeholder="Digite a senha novamente"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2 lg:col-span-1">
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.phone}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={phoneMask}
												placeholder="Ex: (13) 3626-7236"
												disabled={!!form.formState.defaultValues?.phone}
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2 lg:col-span-1">
							<FormField
								control={form.control}
								name="cell_phone"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.cell_phone}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={cellPhoneMask}
												placeholder="Ex: (16) 99913-7752"
												disabled
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="lg:col-span-2">
							<FormField
								control={form.control}
								name="website"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.website}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: https://empreendimentoslopes.com"
												disabled={!!form.formState.defaultValues?.website}
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
								name="description"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.THIRD_STEP.description} (opcional)
										</Fields.Default.Label>
										<FormControl>
											<Textarea
												id={field.name}
												placeholder="Ex: Bem-vindo à nossa empresa! Aqui, acreditamos em [valores] e nos esforçamos para [objetivos]. Nossa missão é [missão da empresa]. Sinta-se à vontade para explorar mais sobre nós e descobrir como podemos ajudá-lo"
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
						<MultiStep.Default.PreviousStep
							type="button"
							onClick={previousStep}
						/>
						<MultiStep.Default.ForwardStep type="submit" />
					</MultiStep.Default.Footer>
				</form>
			</Form>
		</MultiStep.Default.Root>
	)
}
