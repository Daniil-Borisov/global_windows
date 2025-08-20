import { type ReactNode, useState } from 'react';
import { StepFormContext, type StepKey } from './step-form-context';
import type { IFormData } from '../types/types';
import { steps } from '../consts/steps';

const initialFormData: IFormData = {
	material: '',
	size: '',
	type: '',
	contacts: {
		name: '',
		email: '',
		phone: '',
		comment: '',
	},
	sashes: '',
	glassPackage: '',
	selectedPhoto: null,
	opening: '',
};

export const StepFormProvider = ({ children }: { children: ReactNode }) => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [formData, setFormData] = useState<IFormData>(initialFormData);

	const setStep = (step: StepKey) => setCurrentStep(step);
	const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

	const updateData = <K extends keyof IFormData>(data: Pick<IFormData, K>) => {
		setFormData((prev) => ({
			...prev,
			...data,
		}));
	};

	const updateNested = <K extends keyof IFormData>(
		key: K,
		value: IFormData[K]
	) => {
		setFormData((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const nextStep = () => {
		if (currentStep < steps.length) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	return (
		<StepFormContext.Provider
			value={{
				currentStep,
				formData,
				setStep,
				updateData,
				updateNested,
				nextStep,
				prevStep,
				selectedPhoto,
				setSelectedPhoto,
			}}
		>
			{children}
		</StepFormContext.Provider>
	);
};
