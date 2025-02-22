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
} satisfies Lists;
