import React, { useCallback } from "react";
import EpisodeList from "@/modules/episodes/EpisodeList";
import gql from "graphql-tag";
import { useGetEpisodesQuery } from "@/generated/graphql";
import BaseSeo from "@/modules/seo/BaseSeo";
import PAGE_INFO_FRAGMENT from "@/modules/apollo/fragments";
import useInfiniteScroll from "react-infinite-scroll-hook";

const GET_EPISODES = gql`
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
  ${EpisodeList.fragments.episode}
  ${PAGE_INFO_FRAGMENT}
`;

function EpisodesListingView() {
  const { data, loading, error, fetchMore } = useGetEpisodesQuery({
    query: GET_EPISODES,
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    throw error;
  }

  const { episodes } = data || {};

  const results = episodes?.results;
  const next = episodes?.info?.next;
  const hasNextPage = !!next;

  const handleLoadMore = useCallback(
    () =>
      fetchMore({
        // Esto rompe "@ apollo / client 3".
         // No cambia la "carga" incluso si "notifyOnNetworkStatusChange" se establece en "true".
         // consulta: GET_EPISODES,
        variables: { page: next },
      }),
    [fetchMore, next],
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
        title="Episodios"
        description="Lista de episodios de la serie de televisión Rick y Morty"
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/episodes.jpg`,
            },
          ],
        }}
      />
      <EpisodeList
        items={results}
        loading={loading || hasNextPage}
        loadingRef={sentryRef}
      />
    </>
  );
}

export default EpisodesListingView;
