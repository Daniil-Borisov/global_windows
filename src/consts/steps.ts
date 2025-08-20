export const steps = [
	{
		step: 1,
		field: 'material',
		fieldType: 'radio',
		heading: 'Матеріал',
		summary_field: 'Матеріал',
		require: true,
		options: [
			{
				label: 'Пластик',
				value: 'plastic',
				image: `${import.meta.env.BASE_URL}/images/plastic.png`,
			},
			{
				label: 'Дерево',
				value: 'wood',
				image: `${import.meta.env.BASE_URL}/images/wood.png`,
			},
			{
				label: 'Алюміній',
				value: 'aluminium',
				image: `${import.meta.env.BASE_URL}/images/aluminium.png`,
			},
			{
				label: 'Метал',
				value: 'metal',
				image: `${import.meta.env.BASE_URL}/images/metal.png`,
				subtext: 'Додатковий підпис',
			},
		],
	},
	{
		step: 2,
		field: 'size',
		fieldType: 'radio',
		heading: 'Розміри вікна',
		summary_field: 'Розмір, мм',
		require: true,
		options: [
			{
				label: '800 x 1200 мм',
				value: '800x1200',
			},
			{
				label: '1000 x 1400 мм',
				value: '1000x1400',
			},
			{
				label: '1200 x 1500 мм',
				value: '1200x1500',
			},
		],
	},
	{
		step: 3,
		field: 'opening',
		fieldType: 'radio',
		heading: 'Відкривання',
		summary_field: 'Відкривання',
		require: true,
		options: [
			{ label: 'Глухе', value: 'fixed' },
			{ label: 'Поворотне', value: 'rotary' },
			{ label: 'Поворотно-відкидне', value: 'tilt-and-turn' },
		],
	},
	{
		step: 4,
		field: 'sashes',
		fieldType: 'radio',
		heading: 'Кількість шибок',
		summary_field: 'Кількість шибок',
		require: true,
		options: [
			{
				label: '1 шибка',
				value: '1-sash',
			},
			{
				label: '2 шибки',
				value: '2-sashes',
			},
		],
	},
	{
		step: 5,
		field: 'glassPackage',
		fieldType: 'radio',
		heading: 'Склопакет',
		summary_field: 'Склопакет',
		require: true,
		options: [
			{
				label: '2-камерний',
				value: '2-Chamber',
			},
			{
				label: '3-камерний',
				value: '3-Chamber',
			},
		],
	},
	{
		step: 6,
		field: 'type',
		fieldType: 'radio',
		heading: 'Тип вікна',
		summary_field: 'Тип вікна',
		require: true,
		options: [
			{
				label: 'Вмонтоване',
				value: 'mounted_in',
			},
			{
				label: 'Накладне',
				value: 'overhead',
			},
		],
	},
	{
		step: 7,
		field: 'summary',
		fieldType: 'summary',
		heading: 'ВИ обрали:',
		require: false,
	},
	{
		step: 8,
		field: '',
		fieldType: '',
		heading: 'Кількість:',
		require: false,
	},
	{
		step: 9,
		field: 'contacts',
		fieldType: 'contacts',
		heading: 'Контакти',
		require: false,
	},
];
