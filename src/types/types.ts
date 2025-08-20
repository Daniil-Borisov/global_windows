export interface IRadioButton {
	value: string;
	label: string;
	image?: string;
	subtext?: string;
	photo?: string;
}

export interface IFormData {
	material: string;
	size: string;
	type: string;
	contacts: {
		name: string;
		email: string;
		phone: string;
		comment: string;
	};
	sashes: string;
	glassPackage: string;
	selectedPhoto: string | null;
	opening: string;
}
