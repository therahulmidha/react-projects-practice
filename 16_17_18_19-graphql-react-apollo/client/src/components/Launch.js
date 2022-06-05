import { gql, useQuery } from "@apollo/client";
import classNames from "classnames";
import React from "react";
import { Link, useParams } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export const Launch = () => {
  const params = useParams();
  const flight_number = +params.flight_number;

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data.launch;

  return (
    <>
      <h1>Launch</h1>
      <h1 className="display-4 my-3">
        <span className="text-dark">{mission_name}</span>
      </h1>
      <h4 className="mb-3">Launch details</h4>
      <ul className="list-group">
        <li className="list-group-item">flight_number: {flight_number}</li>
        <li className="list-group-item">launch_year: {launch_year}</li>
        <li className="list-group-item">
          <span
            className={classNames({
              "text-success": launch_success,
              "text-danger": !launch_success,
            })}
          >
            Launch successful: {launch_success ? "Yes" : "No"}
          </span>
        </li>
      </ul>
      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>

        <li className="list-group-item">Rocket name: {rocket_name}</li>

        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>
    </>
  );
};
