import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const BookItem = ({ book }) => {
    const [imageUrl, setImageUrl] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getImageUrl = () => {
            Promise.all([axios.get(`/wp-json/wp/v2/media/${book.featured_media}`),
            axios.get(`/wp-json/wp/v2/users/${book.author}`)])
                .then(res => {
                    setImageUrl(res[0].data.media_details.sizes?.full?.source_url);
                    setAuthor(res[1].data.name);
                    setIsLoaded(true);
                })
        }
        getImageUrl();
    }, [book]);

    return (
        <>
            {isLoaded ?
                <div>
                    <h2 style={{ marginBottom: "0" }}>{book.title.rendered}</h2>
                    <small>Review By <strong>{author}</strong></small>
                    <img src={imageUrl} alt={book.title.rendered} style={{ width: "100%" }} />
                    {/* Loads html also <div>{book.excerpt.rendered}</div> */}
                    <div dangerouslySetInnerHTML={{ __html: book.excerpt.rendered }}></div>
                    <Link to={`/book/${book.id}`}>Read Review</Link>
                    <hr />
                </div> : null}

        </>
    )
}
