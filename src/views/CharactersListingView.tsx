import React, { useCallback, useMemo } from "react";
import { Box, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { useGetCharactersQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import BaseSeo from "@/modules/seo/BaseSeo";
import CharacterGridList from "@/modules/characters/CharacterGridList";
import PAGE_INFO_FRAGMENT from "@/modules/apollo/fragments";
import CharacterSearch from "@/modules/characters/CharacterSearch";
import useInfiniteScroll from "react-infinite-scroll-hook";

const GET_CHARACTERS = gql`
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
  ${CharacterGridList.fragments.character}
  ${PAGE_INFO_FRAGMENT}
`;

function CharactersListingView() {
  const router = useRouter();
  const { name } = router.query;
  const variables = useMemo(
    () =>
      typeof name === "string"
        ? {
            filter: { name },
          }
        : {},
    [name],
  );
  const {
    data,
    loading,
    error,
    fetchMore,
    networkStatus,
  } = useGetCharactersQuery({
    query: GET_CHARACTERS,
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    throw error;
  }

  const isSetVariables = networkStatus === 2;

  // Incluso si se cambian las variables, Apollo todavía muestra los resultados anteriores como "datos".
   // Cuando "networkStatus" es igual a 2, significa que las variables han cambiado.
   // Así que básicamente verificamos este valor y, si es cierto, no usamos "datos" anteriores.
  const characters = !isSetVariables ? data?.characters : undefined;
  const next = characters?.info?.next;
  const hasNextPage = Boolean(next);
  const results = characters?.results || [];

  const handleLoadMore = useCallback(
    () =>
      fetchMore({
        // Esto rompe "@ apollo / client 3".
         // No cambia la "carga" incluso si "notifyOnNetworkStatusChange" se establece en "true".
         // consulta: GET_CHARACTERS,
        variables: { ...variables, page: next },
      }),
    [fetchMore, next, variables],
  );

  const [sentryRef] = useInfiniteScroll({
    hasNextPage,
    loading,
    onLoadMore: handleLoadMore,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <>
      <BaseSeo
        title="Characters"
        description="Character list of Rick and Morty TV Series"
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/characters.jpg`,
            },
          ],
        }}
      />
      <Box mb={2}>
        <CharacterSearch />
      </Box>
      {loading || results.length ? (
        <CharacterGridList
          items={results}
          // Debido a que esta es una lista infinita, el indicador de carga se mostrará cuando
           // el usuario se desplaza hasta el final de la página si hay una página siguiente.
           // Si montamos / desmontamos el indicador de carga y el usuario llega al final de la página rápidamente
           // (especialmente en dispositivos móviles) cargando montajes, la altura del desplazamiento aumenta y
           // el usuario no puede verlo antes de desplazarse un poco más hacia abajo.
           // Por lo tanto, podemos montarlo y no desmontarlo cuando haya una página siguiente.
           // Supongo que esta es la forma en que lo hace 9GAG.
          loading={loading || hasNextPage}
          loadingRef={sentryRef}
        />
      ) : (
        <Typography>Nada Encontrado.</Typography>
      )}
    </>
  );
}

export default CharactersListingView;
