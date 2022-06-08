import React from "react";
import { LyricConsumer } from "../../store/lyric-context";
import { Spinner } from "../layout/Spinner";
import { Track } from "./Track";

export const Tracks = () => {
  return (
    <LyricConsumer>
      {(context) => {
        const { trackList, heading } = context;
        if (trackList === undefined || trackList.length === 0) {
          return <Spinner />;
        } else {
          return (
            <>
              <h3 className="text-center mb-4">{heading}</h3>
              {/* bootstrap row with flex box classes */}
              <div className="row justify-content-around align-items-start">
                {trackList.map((item, index) => {
                  return <Track key={index} track={item.track}/>;
                })}
              </div>
            </>
          );
        }
      }}
    </LyricConsumer>
  );
};
