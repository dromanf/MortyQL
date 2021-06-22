import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {}
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  /** Obtiene un carácter específico por ID */
  character?: Maybe<Character>;
  /** Obtiene la lista de todos los personajes */
  characters?: Maybe<Characters>;
  /** Obtener una lista de personajes seleccionados por ID */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Obtener un episodio específico por ID */
  episode?: Maybe<Episode>;
  /** Obtenga la lista de todos los episodios */
  episodes?: Maybe<Episodes>;
  /** Obtener una lista de episodios seleccionados por ID */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Obtener ubicaciones específicas por identificación */
  location?: Maybe<Location>;
  /** Obtenga la lista de todas las ubicaciones */
  locations?: Maybe<Locations>;
  /** Obtener una lista de ubicaciones seleccionadas por ID */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  showDrawer: Scalars['Boolean'];
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterLocation>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type Character = {
  __typename?: 'Character';
  /** La identificación del personaje. */
  id?: Maybe<Scalars['ID']>;
  /** El nombre del personaje. */
  name?: Maybe<Scalars['String']>;
  /** El estado del personaje ('Vivo', 'Muerto' o 'Desconocido'). */
  status?: Maybe<Scalars['String']>;
  /** La especie del personaje. */
  species?: Maybe<Scalars['String']>;
  /** El tipo o subespecie del personaje. */
  type?: Maybe<Scalars['String']>;
  /** El género del personaje ('Femenino', 'Masculino', 'Sin género' o 'Desconocido'). */
  gender?: Maybe<Scalars['String']>;
  /** La ubicación de origen del personaje */
  origin?: Maybe<Location>;
  /** La última ubicación conocida del personaje */
  location?: Maybe<Location>;
  image?: Maybe<Scalars['String']>;
  /** Episodios en los que apareció este personaje. */
  episode?: Maybe<Array<Maybe<Episode>>>;
  /** Hora a la que se creó el personaje en la base de datos. */
  created?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  /** La identificación de la ubicación. */
  id?: Maybe<Scalars['ID']>;
  /** El nombre de la ubicación. */
  name?: Maybe<Scalars['String']>;
  /** El tipo de ubicación. */
  type?: Maybe<Scalars['String']>;
  /** La dimensión en la que se encuentra la ubicación. */
  dimension?: Maybe<Scalars['String']>;
  /** Lista de personajes que se han visto por última vez en la ubicación. */
  residents?: Maybe<Array<Maybe<Character>>>;
  /** Hora a la que se creó la ubicación en la base de datos. */
  created?: Maybe<Scalars['String']>;
};

export type Episode = {
  __typename?: 'Episode';
  /** El id del episodio. */
  id?: Maybe<Scalars['ID']>;
  /** Nombre del episodio */
  name?: Maybe<Scalars['String']>;
  /** La fecha de emisión del episodio. */
  air_date?: Maybe<Scalars['String']>;
  /** El código del episodio. */
  episode?: Maybe<Scalars['String']>;
  /** Lista de personajes que se han visto en el episodio. */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** Hora a la que se creó el episodio en la base de datos. */
  created?: Maybe<Scalars['String']>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Info = {
  __typename?: 'Info';
  /** La duración de la respuesta. */
  count?: Maybe<Scalars['Int']>;
  /** La cantidad de páginas. */
  pages?: Maybe<Scalars['Int']>;
  /** Número de la página siguiente (si existe) */
  next?: Maybe<Scalars['Int']>;
  /** Número de la página anterior (si existe) */
  prev?: Maybe<Scalars['Int']>;
};

export type FilterLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PageInfoFragment = (
  { __typename?: 'Info' }
  & Pick<Info, 'next'>
);

export type CharacterCard_CharacterFragment = (
  { __typename?: 'Character' }
  & Pick<Character, 'id' | 'name' | 'image'>
  & {
    episode?: Maybe<Array<Maybe<(
      { __typename?: 'Episode' }
      & Pick<Episode, 'id' | 'air_date'>
    )>>>
  }
);

export type CharacterCard_CharacterWithSpecsFragment = (
  { __typename?: 'Character' }
  & Pick<Character, 'status' | 'species' | 'gender'>
  & {
    origin?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name'>
    )>, location?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name'>
    )>
  }
  & CharacterCard_CharacterFragment
);

export type CharacterGridList_CharacterFragment = (
  { __typename?: 'Character' }
  & CharacterGridListItem_CharacterFragment
);

export type CharacterGridListItem_CharacterFragment = (
  { __typename?: 'Character' }
  & CharacterCard_CharacterFragment
);

export type CharacterProfile_CharacterFragment = (
  { __typename?: 'Character' }
  & {
    episode?: Maybe<Array<Maybe<(
      { __typename?: 'Episode' }
      & EpisodeList_EpisodeFragment
    )>>>
  }
  & CharacterCard_CharacterWithSpecsFragment
);

export type EpisodeCard_EpisodeFragment = (
  { __typename?: 'Episode' }
  & Pick<Episode, 'id' | 'name' | 'episode' | 'air_date'>
);

export type EpisodeList_EpisodeFragment = (
  { __typename?: 'Episode' }
  & EpisodeListItem_EpisodeFragment
);

export type EpisodeListItem_EpisodeFragment = (
  { __typename?: 'Episode' }
  & Pick<Episode, 'id' | 'name' | 'air_date' | 'episode'>
);

export type EpisodeProfile_EpisodeFragment = (
  { __typename?: 'Episode' }
  & {
    characters?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & CharacterGridList_CharacterFragment
    )>>>
  }
  & EpisodeCard_EpisodeFragment
);

export type GetShowDrawerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShowDrawerQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'showDrawer'>
);

export type LocationCard_LocationFragment = (
  { __typename?: 'Location' }
  & Pick<Location, 'id' | 'name' | 'type' | 'dimension'>
);

export type LocationList_LocationFragment = (
  { __typename?: 'Location' }
  & LocationListItem_LocationFragment
);

export type LocationListItem_LocationFragment = (
  { __typename?: 'Location' }
  & Pick<Location, 'id' | 'name' | 'type'>
);

export type LocationProfile_LocationFragment = (
  { __typename?: 'Location' }
  & {
    residents?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & CharacterGridList_CharacterFragment
    )>>>
  }
  & LocationCard_LocationFragment
);

export type GetCharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCharacterQuery = (
  { __typename?: 'Query' }
  & {
    character?: Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, 'name' | 'image'>
      & CharacterProfile_CharacterFragment
    )>
  }
);

export type GetCharactersQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
}>;


export type GetCharactersQuery = (
  { __typename?: 'Query' }
  & {
    characters?: Maybe<(
      { __typename?: 'Characters' }
      & {
        results?: Maybe<Array<Maybe<(
          { __typename?: 'Character' }
          & CharacterGridList_CharacterFragment
        )>>>, info?: Maybe<(
          { __typename?: 'Info' }
          & PageInfoFragment
        )>
      }
    )>
  }
);

export type GetEpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetEpisodeQuery = (
  { __typename?: 'Query' }
  & {
    episode?: Maybe<(
      { __typename?: 'Episode' }
      & Pick<Episode, 'name'>
      & EpisodeProfile_EpisodeFragment
    )>
  }
);

export type GetEpisodesQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
}>;


export type GetEpisodesQuery = (
  { __typename?: 'Query' }
  & {
    episodes?: Maybe<(
      { __typename?: 'Episodes' }
      & {
        results?: Maybe<Array<Maybe<(
          { __typename?: 'Episode' }
          & EpisodeList_EpisodeFragment
        )>>>, info?: Maybe<(
          { __typename?: 'Info' }
          & PageInfoFragment
        )>
      }
    )>
  }
);

export type GetLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLocationQuery = (
  { __typename?: 'Query' }
  & {
    location?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'name'>
      & LocationProfile_LocationFragment
    )>
  }
);

export type GetLocationsQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
}>;


export type GetLocationsQuery = (
  { __typename?: 'Query' }
  & {
    locations?: Maybe<(
      { __typename?: 'Locations' }
      & {
        results?: Maybe<Array<Maybe<(
          { __typename?: 'Location' }
          & LocationList_LocationFragment
        )>>>, info?: Maybe<(
          { __typename?: 'Info' }
          & PageInfoFragment
        )>
      }
    )>
  }
);

export const PageInfoFragmentDoc = gql`
    fragment pageInfo on Info {
  next
}
    `;
export const CharacterCard_CharacterFragmentDoc = gql`
    fragment CharacterCard_character on Character {
  id
  name
  image
  episode {
    id
    air_date
  }
}
    `;
export const CharacterCard_CharacterWithSpecsFragmentDoc = gql`
    fragment CharacterCard_characterWithSpecs on Character {
  ...CharacterCard_character
  status
  species
  gender
  origin {
    id
    name
  }
  location {
    id
    name
  }
}
    ${CharacterCard_CharacterFragmentDoc}`;
export const EpisodeListItem_EpisodeFragmentDoc = gql`
    fragment EpisodeListItem_episode on Episode {
  id
  name
  air_date
  episode
}
    `;
export const EpisodeList_EpisodeFragmentDoc = gql`
    fragment EpisodeList_episode on Episode {
  ...EpisodeListItem_episode
}
    ${EpisodeListItem_EpisodeFragmentDoc}`;
export const CharacterProfile_CharacterFragmentDoc = gql`
    fragment CharacterProfile_character on Character {
  ...CharacterCard_characterWithSpecs
  episode {
    ...EpisodeList_episode
  }
}
    ${CharacterCard_CharacterWithSpecsFragmentDoc}
${EpisodeList_EpisodeFragmentDoc}`;
export const EpisodeCard_EpisodeFragmentDoc = gql`
    fragment EpisodeCard_episode on Episode {
  id
  name
  episode
  air_date
}
    `;
export const CharacterGridListItem_CharacterFragmentDoc = gql`
    fragment CharacterGridListItem_character on Character {
  ...CharacterCard_character
}
    ${CharacterCard_CharacterFragmentDoc}`;
export const CharacterGridList_CharacterFragmentDoc = gql`
    fragment CharacterGridList_character on Character {
  ...CharacterGridListItem_character
}
    ${CharacterGridListItem_CharacterFragmentDoc}`;
export const EpisodeProfile_EpisodeFragmentDoc = gql`
    fragment EpisodeProfile_episode on Episode {
  ...EpisodeCard_episode
  characters {
    ...CharacterGridList_character
  }
}
    ${EpisodeCard_EpisodeFragmentDoc}
${CharacterGridList_CharacterFragmentDoc}`;
export const LocationListItem_LocationFragmentDoc = gql`
    fragment LocationListItem_location on Location {
  id
  name
  type
}
    `;
export const LocationList_LocationFragmentDoc = gql`
    fragment LocationList_location on Location {
  ...LocationListItem_location
}
    ${LocationListItem_LocationFragmentDoc}`;
export const LocationCard_LocationFragmentDoc = gql`
    fragment LocationCard_location on Location {
  id
  name
  type
  dimension
}
    `;
export const LocationProfile_LocationFragmentDoc = gql`
    fragment LocationProfile_location on Location {
  ...LocationCard_location
  residents {
    ...CharacterGridList_character
  }
}
    ${LocationCard_LocationFragmentDoc}
${CharacterGridList_CharacterFragmentDoc}`;
export const GetShowDrawerDocument = gql`
    query GetShowDrawer {
  showDrawer @client
}
    `;

/**
 * __useGetShowDrawerQuery__
 *
 * To run a query within a React component, call `useGetShowDrawerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShowDrawerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShowDrawerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShowDrawerQuery(baseOptions?: Apollo.QueryHookOptions<GetShowDrawerQuery, GetShowDrawerQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetShowDrawerQuery, GetShowDrawerQueryVariables>(GetShowDrawerDocument, options);
}
export function useGetShowDrawerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShowDrawerQuery, GetShowDrawerQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetShowDrawerQuery, GetShowDrawerQueryVariables>(GetShowDrawerDocument, options);
}
export type GetShowDrawerQueryHookResult = ReturnType<typeof useGetShowDrawerQuery>;
export type GetShowDrawerLazyQueryHookResult = ReturnType<typeof useGetShowDrawerLazyQuery>;
export type GetShowDrawerQueryResult = Apollo.QueryResult<GetShowDrawerQuery, GetShowDrawerQueryVariables>;
export const GetCharacterDocument = gql`
    query GetCharacter($id: ID!) {
  character(id: $id) {
    name
    image
    ...CharacterProfile_character
  }
}
    ${CharacterProfile_CharacterFragmentDoc}`;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, options);
}
export function useGetCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, options);
}
export type GetCharacterQueryHookResult = ReturnType<typeof useGetCharacterQuery>;
export type GetCharacterLazyQueryHookResult = ReturnType<typeof useGetCharacterLazyQuery>;
export type GetCharacterQueryResult = Apollo.QueryResult<GetCharacterQuery, GetCharacterQueryVariables>;
export const GetCharactersDocument = gql`
    query GetCharacters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      ...CharacterGridList_character
    }
    info {
      ...pageInfo
    }
  }
}
    ${CharacterGridList_CharacterFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
}
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
}
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetEpisodeDocument = gql`
    query GetEpisode($id: ID!) {
  episode(id: $id) {
    name
    ...EpisodeProfile_episode
  }
}
    ${EpisodeProfile_EpisodeFragmentDoc}`;

/**
 * __useGetEpisodeQuery__
 *
 * To run a query within a React component, call `useGetEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEpisodeQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, options);
}
export function useGetEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, options);
}
export type GetEpisodeQueryHookResult = ReturnType<typeof useGetEpisodeQuery>;
export type GetEpisodeLazyQueryHookResult = ReturnType<typeof useGetEpisodeLazyQuery>;
export type GetEpisodeQueryResult = Apollo.QueryResult<GetEpisodeQuery, GetEpisodeQueryVariables>;
export const GetEpisodesDocument = gql`
    query GetEpisodes($page: Int, $filter: FilterEpisode) {
  episodes(page: $page, filter: $filter) {
    results {
      ...EpisodeList_episode
    }
    info {
      ...pageInfo
    }
  }
}
    ${EpisodeList_EpisodeFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
}
export function useGetEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
}
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<typeof useGetEpisodesLazyQuery>;
export type GetEpisodesQueryResult = Apollo.QueryResult<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetLocationDocument = gql`
    query GetLocation($id: ID!) {
  location(id: $id) {
    name
    ...LocationProfile_location
  }
}
    ${LocationProfile_LocationFragmentDoc}`;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationQuery(baseOptions: Apollo.QueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
}
export function useGetLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
}
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<typeof useGetLocationLazyQuery>;
export type GetLocationQueryResult = Apollo.QueryResult<GetLocationQuery, GetLocationQueryVariables>;
export const GetLocationsDocument = gql`
    query GetLocations($page: Int) {
  locations(page: $page) {
    results {
      ...LocationList_location
    }
    info {
      ...pageInfo
    }
  }
}
    ${LocationList_LocationFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
}
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
}
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;