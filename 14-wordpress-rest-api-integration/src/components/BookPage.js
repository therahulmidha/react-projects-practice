import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { LoginContext } from "../store_context/auth-context";

export const BookPage = (props) => {
  const [book, setBook] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const param = useParams();
  // const { isLoggedIn } = useContext(LoginContext);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const getBook = () => {
      axios
        .get(`/wp-json/wp/v2/books/${param.id}`)
        .then((res) => {
          setBook(res.data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    };
    getBook();
  }, [param]);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoaded ? (
        <div>
          <Link to="/book">Go Back</Link>
          {/* use history here */}
          <hr />
          <h1>{book.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: book.content.rendered }}
          ></div>
          <h4>Publisher: {book.acf.publisher}</h4>
        </div>
      ) : null}
    </>
  );
};
