// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
	checkbox,
	file,
	image,
	password,
	relationship,
	select,
	text,
	timestamp,
} from '@keystone-6/core/fields';

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

import { createId } from '@paralleldrive/cuid2';
import bcrypt from 'bcrypt';

import type { BaseItem } from '@keystone-6/core/types';
import type { SessionType } from './auth';
// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from '.keystone/types';

const isUser = ({ session }: { session?: SessionType }) => !!session?.data;

const isPerson = ({
	session,
	item,
}: { session?: SessionType; item: BaseItem }) =>
	!!session?.data && session.data.id === item.id;

const isAdmin = ({ session }: { session?: SessionType }) =>
	!!session?.data?.isAdmin;

const isPersonOrAdmin = (args: { session?: SessionType; item: BaseItem }) =>
	isPerson(args) || isAdmin(args);

export const lists = {
	User: list({
		// WARNING
		//   for this starter project, anyone can create, query, update and delete anything
		//   if you want to prevent random people on the internet from accessing your data,
		//   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
		access: {
			operation: {
				query: isUser,
				create: isAdmin,
				update: isAdmin,
				delete: isAdmin,
			},
			filter: {
				query: (args) => {
					if (!args.session) return false;
					if (isAdmin(args)) return true;
					return { email: { equals: args.session.data.email } };
				},
			},
			item: {
				update: isPersonOrAdmin,
			},
		},

		// this is the fields for our User list
		fields: {
			// by adding isRequired, we enforce that every User should have a name
			//   if no name is provided, an error will be displayed
			name: text({ validation: { isRequired: true } }),

			email: text({
				validation: { isRequired: true },
				// by adding isIndexed: 'unique', we're saying that no user can have the same
				// email as another user - this may or may not be a good idea for your project
				isIndexed: 'unique',
			}),

			password: password({
				validation: { isRequired: true },
				bcrypt,
			}),

			isAdmin: checkbox({
				// defaultValue: false,
				access: {
					read: isUser,
					update: isAdmin,
				},
			}),

			createdAt: timestamp({
				// this sets the timestamp to Date.now() when the user is first created
				defaultValue: { kind: 'now' },
			}),
		},
	}),

	Year: list({
		access: {
			operation: {
				query: allowAll,
				create: isAdmin,
				update: isAdmin,
				delete: isAdmin,
			},
		},
		description:
			'A year collection that includes all the projects for that year. Year is a unique field.',
		ui: {
			labelField: 'year',
		},
		fields: {
			year: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
			}),
			projects: relationship({
				ref: 'Project.year',
				many: true,
			}),
		},
	}),

	ProjectAuthor: list({
		access: {
			operation: {
				query: allowAll,
				create: isAdmin,
				update: isAdmin,
				delete: isAdmin,
			},
		},
		description:
			'There is no need to create the authors independently, and project authors is only being stored in a separate table for semantic reasons. You can create them when creating a Project (Project > Authors > Create related Project Author).',
		fields: {
			project: relationship({
				ref: 'Project.authors',
			}),
			name: text({ validation: { isRequired: true } }),
			class: text({ validation: { isRequired: true } }),
		},
	}),

	Project: list({
		access: {
			operation: {
				query: allowAll,
				create: isAdmin,
				update: isAdmin,
				delete: isAdmin,
			},
		},
		fields: {
			title: text({ validation: { isRequired: true } }),
			year: relationship({
				ref: 'Year.projects',
			}),
			category: select({
				type: 'enum',
				validation: { isRequired: true },
				options: [
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
				],
			}),
			authors: relationship({
				ref: 'ProjectAuthor.project',
				many: true,
				ui: {
					displayMode: 'cards',
					cardFields: ['id', 'name', 'class'],
					inlineConnect: true,
					inlineCreate: {
						fields: ['name', 'class'],
					},
				},
			}),
			bannerImg: image({
				storage: 'local_images',
			}),
			slides: file({
				storage: 'local_files',
			}),
			summary: text({
				validation: { isRequired: true, length: { min: 75, max: 250 } },
				ui: {
					description:
						'A short summary of the project, to be displayed on the project card.',
					displayMode: 'textarea',
				},
			}),
			description: document({
				links: true,
				formatting: true,
				dividers: true,
				ui: {
					description:
						'A detailed description of the project, displayed on the respective project pages.',
				},
			}),
			createdAt: timestamp({
				defaultValue: { kind: 'now' },
			}),
		},
	}),
} satisfies Lists;
