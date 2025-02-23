/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type FileFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type FileFieldOutput = {
  __typename?: 'FileFieldOutput';
  filename: Scalars['String']['output'];
  filesize: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createProject?: Maybe<Project>;
  createProjectAuthor?: Maybe<ProjectAuthor>;
  createProjectAuthors?: Maybe<Array<Maybe<ProjectAuthor>>>;
  createProjects?: Maybe<Array<Maybe<Project>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createYear?: Maybe<Year>;
  createYears?: Maybe<Array<Maybe<Year>>>;
  deleteProject?: Maybe<Project>;
  deleteProjectAuthor?: Maybe<ProjectAuthor>;
  deleteProjectAuthors?: Maybe<Array<Maybe<ProjectAuthor>>>;
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteYear?: Maybe<Year>;
  deleteYears?: Maybe<Array<Maybe<Year>>>;
  endSession: Scalars['Boolean']['output'];
  updateProject?: Maybe<Project>;
  updateProjectAuthor?: Maybe<ProjectAuthor>;
  updateProjectAuthors?: Maybe<Array<Maybe<ProjectAuthor>>>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateYear?: Maybe<Year>;
  updateYears?: Maybe<Array<Maybe<Year>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProjectAuthorArgs = {
  data: ProjectAuthorCreateInput;
};


export type MutationCreateProjectAuthorsArgs = {
  data: Array<ProjectAuthorCreateInput>;
};


export type MutationCreateProjectsArgs = {
  data: Array<ProjectCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateYearArgs = {
  data: YearCreateInput;
};


export type MutationCreateYearsArgs = {
  data: Array<YearCreateInput>;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteProjectAuthorArgs = {
  where: ProjectAuthorWhereUniqueInput;
};


export type MutationDeleteProjectAuthorsArgs = {
  where: Array<ProjectAuthorWhereUniqueInput>;
};


export type MutationDeleteProjectsArgs = {
  where: Array<ProjectWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteYearArgs = {
  where: YearWhereUniqueInput;
};


export type MutationDeleteYearsArgs = {
  where: Array<YearWhereUniqueInput>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateProjectAuthorArgs = {
  data: ProjectAuthorUpdateInput;
  where: ProjectAuthorWhereUniqueInput;
};


export type MutationUpdateProjectAuthorsArgs = {
  data: Array<ProjectAuthorUpdateArgs>;
};


export type MutationUpdateProjectsArgs = {
  data: Array<ProjectUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateYearArgs = {
  data: YearUpdateInput;
  where: YearWhereUniqueInput;
};


export type MutationUpdateYearsArgs = {
  data: Array<YearUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Project = {
  __typename?: 'Project';
  authors?: Maybe<Array<ProjectAuthor>>;
  authorsCount?: Maybe<Scalars['Int']['output']>;
  bannerImg?: Maybe<ImageFieldOutput>;
  category?: Maybe<ProjectCategoryType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Project_Description_Document>;
  id: Scalars['ID']['output'];
  slides?: Maybe<FileFieldOutput>;
  title?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Year>;
};


export type ProjectAuthorsArgs = {
  cursor?: InputMaybe<ProjectAuthorWhereUniqueInput>;
  orderBy?: Array<ProjectAuthorOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProjectAuthorWhereInput;
};


export type ProjectAuthorsCountArgs = {
  where?: ProjectAuthorWhereInput;
};

export type ProjectAuthor = {
  __typename?: 'ProjectAuthor';
  class?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
};

export type ProjectAuthorCreateInput = {
  class?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectRelateToOneForCreateInput>;
};

export type ProjectAuthorManyRelationFilter = {
  every?: InputMaybe<ProjectAuthorWhereInput>;
  none?: InputMaybe<ProjectAuthorWhereInput>;
  some?: InputMaybe<ProjectAuthorWhereInput>;
};

export type ProjectAuthorOrderByInput = {
  class?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type ProjectAuthorRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectAuthorWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectAuthorCreateInput>>;
};

export type ProjectAuthorRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectAuthorWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectAuthorCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectAuthorWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectAuthorWhereUniqueInput>>;
};

export type ProjectAuthorUpdateArgs = {
  data: ProjectAuthorUpdateInput;
  where: ProjectAuthorWhereUniqueInput;
};

export type ProjectAuthorUpdateInput = {
  class?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectRelateToOneForUpdateInput>;
};

export type ProjectAuthorWhereInput = {
  AND?: InputMaybe<Array<ProjectAuthorWhereInput>>;
  NOT?: InputMaybe<Array<ProjectAuthorWhereInput>>;
  OR?: InputMaybe<Array<ProjectAuthorWhereInput>>;
  class?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
};

export type ProjectAuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ProjectCategoryType {
  Cat1 = 'cat1',
  Cat2 = 'cat2',
  Cat3 = 'cat3',
  Cat4 = 'cat4',
  Cat5 = 'cat5',
  Cat6 = 'cat6',
  Cat7 = 'cat7',
  Cat8 = 'cat8',
  Cat9 = 'cat9',
  Cat10 = 'cat10'
}

export type ProjectCategoryTypeNullableFilter = {
  equals?: InputMaybe<ProjectCategoryType>;
  in?: InputMaybe<Array<ProjectCategoryType>>;
  not?: InputMaybe<ProjectCategoryTypeNullableFilter>;
  notIn?: InputMaybe<Array<ProjectCategoryType>>;
};

export type ProjectCreateInput = {
  authors?: InputMaybe<ProjectAuthorRelateToManyForCreateInput>;
  bannerImg?: InputMaybe<ImageFieldInput>;
  category?: InputMaybe<ProjectCategoryType>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  slides?: InputMaybe<FileFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<YearRelateToOneForCreateInput>;
};

export type ProjectManyRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectOrderByInput = {
  category?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ProjectRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectRelateToOneForCreateInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  create?: InputMaybe<ProjectCreateInput>;
};

export type ProjectRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  create?: InputMaybe<ProjectCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectUpdateArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateInput = {
  authors?: InputMaybe<ProjectAuthorRelateToManyForUpdateInput>;
  bannerImg?: InputMaybe<ImageFieldInput>;
  category?: InputMaybe<ProjectCategoryType>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  slides?: InputMaybe<FileFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<YearRelateToOneForUpdateInput>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  authors?: InputMaybe<ProjectAuthorManyRelationFilter>;
  category?: InputMaybe<ProjectCategoryTypeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  year?: InputMaybe<YearWhereInput>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Project_Description_Document = {
  __typename?: 'Project_description_Document';
  document: Scalars['JSON']['output'];
};


export type Project_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  project?: Maybe<Project>;
  projectAuthor?: Maybe<ProjectAuthor>;
  projectAuthors?: Maybe<Array<ProjectAuthor>>;
  projectAuthorsCount?: Maybe<Scalars['Int']['output']>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Year>;
  years?: Maybe<Array<Year>>;
  yearsCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectAuthorArgs = {
  where: ProjectAuthorWhereUniqueInput;
};


export type QueryProjectAuthorsArgs = {
  cursor?: InputMaybe<ProjectAuthorWhereUniqueInput>;
  orderBy?: Array<ProjectAuthorOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProjectAuthorWhereInput;
};


export type QueryProjectAuthorsCountArgs = {
  where?: ProjectAuthorWhereInput;
};


export type QueryProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProjectWhereInput;
};


export type QueryProjectsCountArgs = {
  where?: ProjectWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryYearArgs = {
  where: YearWhereUniqueInput;
};


export type QueryYearsArgs = {
  cursor?: InputMaybe<YearWhereUniqueInput>;
  orderBy?: Array<YearOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: YearWhereInput;
};


export type QueryYearsCountArgs = {
  where?: YearWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Year = {
  __typename?: 'Year';
  id: Scalars['ID']['output'];
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};


export type YearProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProjectWhereInput;
};


export type YearProjectsCountArgs = {
  where?: ProjectWhereInput;
};

export type YearCreateInput = {
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type YearOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  year?: InputMaybe<OrderDirection>;
};

export type YearRelateToOneForCreateInput = {
  connect?: InputMaybe<YearWhereUniqueInput>;
  create?: InputMaybe<YearCreateInput>;
};

export type YearRelateToOneForUpdateInput = {
  connect?: InputMaybe<YearWhereUniqueInput>;
  create?: InputMaybe<YearCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type YearUpdateArgs = {
  data: YearUpdateInput;
  where: YearWhereUniqueInput;
};

export type YearUpdateInput = {
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type YearWhereInput = {
  AND?: InputMaybe<Array<YearWhereInput>>;
  NOT?: InputMaybe<Array<YearWhereInput>>;
  OR?: InputMaybe<Array<YearWhereInput>>;
  id?: InputMaybe<IdFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
  year?: InputMaybe<StringFilter>;
};

export type YearWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
