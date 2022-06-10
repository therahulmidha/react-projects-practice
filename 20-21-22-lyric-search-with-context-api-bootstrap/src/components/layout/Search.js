import axios from "axios";
import React, { useContext, useState } from "react";
import { LyricContext } from "../../store/lyric-context";

export const Search = () => {
  const [searchStates, setSearchStates] = useState({
    trackTitle: "",
    searchType: "Song"
  });
  const context = useContext(LyricContext);
  const onChangeHandler = (event) => {
    setSearchStates((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const query = searchStates.searchType === "Song" ? `q_track=${searchStates.trackTitle}`: `q_artist=${searchStates.trackTitle}`;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?${query}&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`
      )
      .then((res) => {
          console.log(res.data);
        context.setTracks(res.data.message.body.track_list);
        setSearchStates((prevState) => ({
          ...prevState,
          trackTitle: "",
        }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music"></i> {"  "}
        Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for a song</p>
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Song Title..."
            name="trackTitle"
            value={searchStates.trackTitle}
            onChange={onChangeHandler}
          />
        </div>
        <div className="row text-center align-items-end mt-2">
          <div className="col-md-6">
            <button
              className="btn btn-primary btn-lg btn-block mb-5"
              type="submit"
            >
              Get Track Lyrics
            </button>
          </div>
          <div className="col-md-6">
            <select
              type="button"
              className="btn btn-primary btn-lg btn-block mb-5"
              name="searchType"
              value={searchStates.searchType}
              onChange={onChangeHandler}
            >
              <option className="dropdown-item">
                Song
              </option>
              <option className="dropdown-item">
                Artist
              </option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
