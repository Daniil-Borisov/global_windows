import RadioGroupWrapper from '../inputs/radio-group-wrapper';

const materials = [
	{
		label: 'Пластик',
		value: 'plastic',
		image: '/images/plastic.png',
		photo: '/photo/photo-1.jpg',
	},
	{
		label: 'Дерево',
		value: 'wood',
		image: '/images/wood.png',
		photo: '/photo/photo-2.jpg',
	},
	{
		label: 'Алюміній',
		value: 'aluminium',
		image: '/images/aluminium.png',
		photo: '/photo/photo-3.jpg',
	},
	{
		label: 'Метал',
		value: 'metal',
		image: '/images/metal.png',
		subtext: 'Додатковий підпис',
		photo: '/photo/photo-4.jpg',
	},
];

export default function MaterialStep() {
	return <RadioGroupWrapper radioButtons={materials} />;
}
