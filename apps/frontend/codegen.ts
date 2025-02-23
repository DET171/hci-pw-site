import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: '../cms/schema.graphql',
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './app/lib/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      }
    }
  }
}
 
export default config