import { FormControl, RadioGroup } from '@mui/material';
import styles from './inputs.module.scss';
import { RadioButton } from './radio-button.tsx';
import type { IFormData, IRadioButton } from '../../types/types.ts';
import { useStepForm } from '../../context/use-step-form.tsx';
import { steps } from '../../consts/steps.ts';
import { prices } from '../../consts/prices.ts';

interface IRadioGroupWrapperProps {
	radioButtons: IRadioButton[];
}

const RadioGroupWrapper = ({ radioButtons }: IRadioGroupWrapperProps) => {
	const { currentStep, formData, updateNested, setSelectedPhoto } =
		useStepForm();
	const current = steps.find((s) => s.step === currentStep);

	if (!current || current.fieldType !== 'radio') return null;

	const field = current.field as keyof IFormData;
	const material = formData.material as keyof typeof prices;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		updateNested(field, value);

		try {
			const imageData = prices?.[material]?.[field]?.[value];
			console.log(material, field, value);

			if (imageData?.image) {
				setSelectedPhoto(imageData.image);
			}
		} catch (err) {
			console.warn('Ошибка при поиске изображения в prices:', err);
		}
	};

	return (
		<FormControl component='fieldset' sx={{ width: '100%' }}>
			<RadioGroup
				aria-label={current.field}
				name={current.field}
				className={styles.radioGroup}
				value={formData[current.field as keyof typeof formData]}
				onChange={handleChange}
			>
				{radioButtons.map((item) => (
					<RadioButton item={item} key={item.value} />
				))}
			</RadioGroup>
		</FormControl>
	);
};

export default RadioGroupWrapper;
