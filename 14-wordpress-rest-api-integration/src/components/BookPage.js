import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const BookPage = (props) => {
    const [book, setBook] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const param = useParams();

    useEffect(() => {
        const getBook = () => {
            axios.get(`/wp-json/wp/v2/books/${param.id}`)
                .then(res => {
                    setBook(res.data);
                    setIsLoaded(true);
                })
                .catch(err => console.log(err))
        }
        getBook();
    }, [param]);

    return (
        <>
            {isLoaded ?
                <div>
                    <Link to="/">Go Back</Link>
                    <hr />
                    <h1>{book.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: book.content.rendered }}></div>
                    <h4>Publisher: {book.acf.publisher}</h4>
                </div>

                : null}
        </>
    )
}
