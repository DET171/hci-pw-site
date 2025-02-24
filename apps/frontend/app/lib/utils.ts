import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// mapping for project categories
export const categories = [
	{ label: 'Experimental Research (Cat 1)', value: 'cat1' },
	{ label: 'Humanities and Social Sciences (Cat 2)', value: 'cat2' },
	{ label: 'Inventions and Engineering (Cat 3)', value: 'cat3' },
	{ label: 'Resource Development (Cat 4)', value: 'cat4' },
	{ label: 'Creative Arts (Cat 5)', value: 'cat5' },
	{ label: 'Chinese Language Arts (Cat 6)', value: 'cat6' },
	{ label: 'Service Learning (Cat 7)', value: 'cat7' },
	{ label: 'Mathematics (Cat 8)', value: 'cat8' },
	{ label: 'Infocomm (Cat 9)', value: 'cat9' },
	{ label: 'Entrepreneurship (Cat 10)', value: 'cat10' },
];