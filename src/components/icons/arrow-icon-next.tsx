import type { SVGProps } from 'react';

const ArrowIconNext = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='14'
		height='15'
		viewBox='0 0 14 15'
		fill='none'
		{...props}
	>
		<g clipPath='url(#clip0)'>
			<path
				d='M3.28125 0.9375L10.7188 7.5L3.28125 14.0625V0.9375Z'
				fill='currentColor'
			/>
		</g>
		<defs>
			<clipPath id='clip0'>
				<rect
					width='14'
					height='14'
					fill='currentColor'
					transform='translate(0 0.5)'
				/>
			</clipPath>
		</defs>
	</svg>
);

export default ArrowIconNext;
