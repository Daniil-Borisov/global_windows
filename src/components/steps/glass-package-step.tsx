import RadioGroupWrapper from '../inputs/radio-group-wrapper';

const glassPackages = [
	{
		label: '2-камерний',
		value: '2-Chamber',
	},
	{
		label: '3-камерний',
		value: '3-Chamber',
	},
];

export default function GlassPackagesStep() {
	return <RadioGroupWrapper radioButtons={glassPackages} />;
}
