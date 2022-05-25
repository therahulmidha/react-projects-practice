import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BookItem } from './BookItem';

export const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getBooks = () => {
            axios.get("/wp-json/wp/v2/books")
                .then(res => {
                    setBooks(res.data);
                    setIsLoaded(true);
                })
                .catch(err => console.log(err))
        }
        getBooks();
    }, []);
    return (
        <>
            {
                isLoaded ?
                    books.map(book => (
                        <BookItem key={book.id} book={book}/>
                    )) : <h3>Loading...</h3>
            }
        </>
    )
}
