import React, { useCallback } from "react";
import PAGE_INFO_FRAGMENT from "@/modules/apollo/fragments";
import gql from "graphql-tag";
import { useGetLocationsQuery } from "@/generated/graphql";
import BaseSeo from "@/modules/seo/BaseSeo";
import LocationList from "@/modules/locations/LocationList";
import useInfiniteScroll from "react-infinite-scroll-hook";

const GET_LOCATIONS = gql`
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
  ${LocationList.fragments.location}
  ${PAGE_INFO_FRAGMENT}
`;

function LocationsListingView() {
  const { data, loading, error, fetchMore } = useGetLocationsQuery({
    query: GET_LOCATIONS,
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    throw error;
  }

  const locations = data?.locations;
  const results = locations?.results;
  const next = locations?.info?.next;
  const hasNextPage = !!next;

  const handleLoadMore = useCallback(
    () =>
      fetchMore({
        // Esto rompe "@ apollo / client 3".
         // No cambia la "carga" incluso si "notifyOnNetworkStatusChange" se establece en "true".
         // consulta: GET_LOCATIONS,
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
        title="Ubicaciones"
        description="Lista de ubicaciones de la serie de televisión Rick and Morty"
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/locations.jpg`,
            },
          ],
        }}
      />
      <LocationList
        items={results}
        loading={loading || hasNextPage}
        loadingRef={sentryRef}
      />
    </>
  );
}

export default LocationsListingView;
