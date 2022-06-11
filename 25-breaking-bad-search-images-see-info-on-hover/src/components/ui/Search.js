import React, { useState } from "react";

export const Search = ({ getQuery }) => {
  const [searchStates, setSearchStates] = useState({
    character: "",
  });
  const onChangeHandler = (event) => {
    setSearchStates((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    getQuery(searchStates.character);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <p className="lead text-center">Search any name</p>
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            name="character"
            value={searchStates.character}
            onChange={onChangeHandler}
          />
        </div>
        <div className="text-center align-items-end mt-2">
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Get Character
          </button>
        </div>
      </form>
    </div>
  );
};
