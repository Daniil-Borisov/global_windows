import { createContext } from 'react';
import type { IFormData } from '../types/types';

export type StepKey = number;

export interface StepFormContextProps {
	currentStep: StepKey;
	formData: IFormData;
	setStep: (step: StepKey) => void;
	updateData: <K extends keyof IFormData>(data: Pick<IFormData, K>) => void;
	updateNested: <K extends keyof IFormData>(
		key: K,
		value: IFormData[K]
	) => void;
	nextStep: () => void;
	prevStep: () => void;
	selectedPhoto: string | null;
	setSelectedPhoto: (photo: string) => void;
}

export const StepFormContext = createContext<StepFormContextProps | undefined>(
	undefined
);
