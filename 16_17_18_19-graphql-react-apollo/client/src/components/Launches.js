import { gql, useQuery } from "@apollo/client";
import React from "react";
import { LaunchItem } from "./LaunchItem";
import { MissionKey } from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
export const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Launches</h1>
      <MissionKey />
      {data.launches.map((launch, index) => (
        <LaunchItem key={index} launch={launch} />
      ))}
    </>
  );
};
