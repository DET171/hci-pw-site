import 'dotenv/config';
// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema';

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { session, withAuth } from './auth';

import bcrypt from 'bcrypt';

import type { DatabaseProvider } from '@keystone-6/core/types';
import type { StorageConfig } from '@keystone-6/core/types';
import type { PrismaClient } from '.prisma/client';

const baseUrl = process.env.BASE_URL || 'http://localhost:5001';

const objectStorage = (type: 'file' | 'image') =>
	({
		kind: 'local',
		generateUrl: (path) => `${baseUrl}/uploads${path}`,
		storagePath: './assets',
		serverRoute: {
			path: '/uploads',
		},
		type,
	}) satisfies StorageConfig;

console.log('Using database provider:', process.env.DB_PROVIDER || 'sqlite');
console.log('Using database URL:', process.env.DB_URL || 'file:./keystone.db');

export default withAuth(
	config({
		db: {
			// we're using sqlite for the fastest startup experience
			//   for more information on what database might be appropriate for you
			//   see https://keystonejs.com/docs/guides/choosing-a-database#title
			provider: (process.env.DB_PROVIDER as DatabaseProvider) || 'sqlite',
			url: process.env.DB_URL || 'file:./keystone.db',
			onConnect: async (context) => {
				// create initial admin user if it doesn't exist
				const db = context.prisma as PrismaClient;
				const admin = await db.user.findFirst({ where: { isAdmin: true } });
				if (!admin) {
					console.log('Configuring default admin user');
					await db.user.create({
						data: {
							name: process.env.DEFAULT_ADMIN_USER || 'admin',
							email: process.env.DEFAULT_ADMIN_EMAIL || 'admin@hci.edu.sg',
							password: await bcrypt.hash(
								process.env.DEFAULT_ADMIN_PW || 'admin',
								10,
							),
							isAdmin: true,
						},
					});
				}
			},
		},
		lists,
		session,
		server: {
			port: 5001,
		},
		storage: {
			local_files: objectStorage('file'),
			local_images: objectStorage('image'),
		},
	}),
);
