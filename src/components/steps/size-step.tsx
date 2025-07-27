import { SliderWithInput } from '../inputs/slider-with-input';
import { useStepForm } from '../../context/use-step-form';
import styles from './step.module.scss';

export default function SizeStep() {
	const { formData, updateNested } = useStepForm();

	const handleChange = (key: 'length' | 'width', value: number) => {
		updateNested('size', {
			...formData.size,
			[key]: value,
		});
	};

	return (
		<div className={styles.sizeWrapper}>
			<SliderWithInput
				label='Довжина'
				sublabel='В міліметрах'
				required
				min={300}
				max={1800}
				value={formData.size.length}
				onChange={(val) => handleChange('length', val)}
			/>
			<SliderWithInput
				label='Ширина'
				sublabel='В міліметрах'
				required
				min={300}
				max={1800}
				value={formData.size.width}
				onChange={(val) => handleChange('width', val)}
			/>
		</div>
	);
}
