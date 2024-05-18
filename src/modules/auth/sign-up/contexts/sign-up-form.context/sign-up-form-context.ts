'use client'

import { createContext } from 'react'
import type { SignUpFormContextValues } from './@types/sign-up-form-context-values'

export const SignUpFormContext = createContext<SignUpFormContextValues>(
	{} as SignUpFormContextValues
)
