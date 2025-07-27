import RadioGroupWrapper from '../inputs/radio-group-wrapper';

const sashes = [
	{
		label: '1 створка',
		value: '1-sash',
	},
	{
		label: '2 створки',
		value: '2-sashes',
	},
];

export default function SashesStep() {
	return <RadioGroupWrapper radioButtons={sashes} />;
}
