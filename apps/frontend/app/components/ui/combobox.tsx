'use client';

import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '~/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '~/components/ui/popover';

export function Combobox({
	options,
	value,
	name,
	onValueChange,
	placeholder = 'Search...',
	className,
	open: defaultOpen = false,
}: {
	open?: boolean;
	options: { label: string; value: string }[];
	name: string;
	value: string;
	placeholder?: string;
	className?: string;
	onValueChange: (value: string) => void;
}) {
	const [open, setOpen] = useState(defaultOpen);
	// const [value, setValue] = useState('');

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild className={className}>
				<Button
					variant='outline'
					// biome-ignore lint/a11y/useSemanticElements: Combobox trigger only
					role='combobox'
					aria-expanded={open}
					className={cn('w-full justify-between')}
				>
					<span className='truncate'>
						{(value && options.find((option) => option.value === value))
							? options.find((option) => option.value === value)?.label
							: 'Select framework...'}
					</span>
					<ChevronsUpDown className='opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className={'w-full p-0'}>
				<Command>
					<CommandInput name={name} placeholder={placeholder} className='h-9' />
					<CommandList>
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={(currentValue) => {
										onValueChange(currentValue === value ? '' : currentValue);
										setOpen(false);
									}}
								>
									{option.label}
									<Check
										className={cn(
											'ml-auto',
											value === option.value ? 'opacity-100' : 'opacity-0',
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
