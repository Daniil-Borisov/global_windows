import RadioGroupWrapper from '../inputs/radio-group-wrapper';

const types = [
	{
		label: 'Вмонтоване',
		value: 'mounted_in',
	},
	{
		label: 'Накладне',
		value: 'overhead',
	},
	{
		label: 'Вмонтоване',
		value: 'mounted_in1',
		subtext: 'Цей текст є прикладом для заповнення місця на сторінці',
	},
	{
		label: 'Метал',
		value: 'overhead1',
		subtext: 'Додатковий підпис',
	},
	{
		label: 'Вмонтоване',
		value: 'mounted_in2',
	},
	{
		label: 'Накладне',
		value: 'overhead2',
	},
	{
		label: 'Вмонтоване',
		value: 'mounted_in3',
		subtext: 'Цей текст є прикладом для заповнення місця на сторінці',
	},
];

export default function TypeStep() {
	return <RadioGroupWrapper radioButtons={types} />;
}
