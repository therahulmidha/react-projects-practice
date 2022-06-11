import React from "react";
import { Spinner } from "../ui/Spinner";
import { CharacterItem } from "./CharacterItem";

export const CharacterGrid = ({ isLoading, items, query }) => {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {items.map((item, index) => (
            <CharacterItem key={index} item={item} query={query} />
          ))}
        </section>
      )}
    </div>
  );
};
