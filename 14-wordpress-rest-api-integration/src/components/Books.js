import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../store_context/auth-context";
import { BookItem } from "./BookItem";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const { isLoggedIn } = useContext(LoginContext);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const getBooks = () => {
      axios
        .get("/wp-json/wp/v2/books")
        .then((res) => {
          setBooks(res.data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    };
    getBooks();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoaded ? (
        books.map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};
