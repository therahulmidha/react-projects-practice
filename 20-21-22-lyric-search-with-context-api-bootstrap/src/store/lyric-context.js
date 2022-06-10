import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LyricContext = createContext({});

export const LyricContextProvider = (props) => {
  const [trackList, setTrackList] = useState([]);

  const [heading, setHeading] = useState("Top 10 tracks");

  useEffect(() => {
    const getLyrics = () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`
        )
        .then((res) => setTrackList(res.data.message.body.track_list))
        .catch((err) => console.log(err));
    };

    getLyrics();
  }, []);

  const setTracks = (newTrackList) => {
    setHeading("Search Results: ")
    setTrackList(newTrackList);
  }

  const lyricContextValue = { trackList, heading, setTracks };
  return (
    <LyricContext.Provider value={lyricContextValue}>
      {props.children}
    </LyricContext.Provider>
  );
};

export const LyricConsumer = LyricContext.Consumer;
