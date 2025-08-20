import RadioGroupWrapper from '../inputs/radio-group-wrapper';

const materials = [
	{
		label: 'Пластик',
		value: 'plastic',
		image: `${import.meta.env.BASE_URL}/images/plastic.png`,
		photo: `${import.meta.env.BASE_URL}/photo/photo-1.jpg`,
	},
	{
		label: 'Дерево',
		value: 'wood',
		image: `${import.meta.env.BASE_URL}/images/wood.png`,
		photo: `${import.meta.env.BASE_URL}/photo/photo-2.jpg`,
	},
	{
		label: 'Алюміній',
		value: 'aluminium',
		image: `${import.meta.env.BASE_URL}/images/aluminium.png`,
		photo: `${import.meta.env.BASE_URL}/photo/photo-3.jpg`,
	},
	{
		label: 'Метал',
		value: 'metal',
		image: `${import.meta.env.BASE_URL}/images/metal.png`,
		subtext: 'Додатковий підпис',
		photo: `${import.meta.env.BASE_URL}/photo/photo-4.jpg`,
	},
];

export default function MaterialStep() {
	return <RadioGroupWrapper radioButtons={materials} />;
}
