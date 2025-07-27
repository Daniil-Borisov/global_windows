import SizeStep from '../components/steps/size-step';
import MaterialStep from '../components/steps/material-step';
import TypeStep from '../components/steps/type-step';
import ContactsStep from '../components/steps/contact-step';
import SashesStep from '../components/steps/sashes-step';
import GlassPackagesStep from '../components/steps/glass-package-step';

export const steps = [
	{
		step: 1,
		field: 'material',
		fieldType: 'radio',
		component: MaterialStep,
		heading: 'Матеріал',
		require: true,
	},
	{
		step: 2,
		field: 'size',
		fieldType: 'object',
		component: SizeStep,
		require: true,
	},
	{
		step: 3,
		field: 'type',
		fieldType: 'radio',
		component: TypeStep,
		heading: 'Тип вікна',
		require: true,
	},
	{
		step: 4,
		field: 'sashes',
		fieldType: 'radio',
		component: SashesStep,
		heading: 'Кількість створок',
		require: true,
	},
	{
		step: 5,
		field: 'glassPackage',
		fieldType: 'radio',
		component: GlassPackagesStep,
		heading: 'Склопакет',
		require: true,
	},
	{
		step: 6,
		field: 'contacts',
		fieldType: 'object',
		component: ContactsStep,
		heading: 'З ким ми можемо зв’язатись?',
		require: false,
	},
];
