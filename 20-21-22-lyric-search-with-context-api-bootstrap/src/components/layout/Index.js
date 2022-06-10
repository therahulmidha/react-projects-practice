import React from "react";
import { Tracks } from "../tracks/Tracks";
import { Search } from "./Search";

export const Index = () => {
  return (
    <div>
      <Search />
      <Tracks />
    </div>
  );
};
