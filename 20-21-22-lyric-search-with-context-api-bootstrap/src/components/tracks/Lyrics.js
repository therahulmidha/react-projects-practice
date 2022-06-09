import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { Link, useParams } from 'react-router-dom'
import { Spinner } from '../layout/Spinner';

export const Lyrics = () => {
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const getLyrics = () => {
            axios
                .get(
                    `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`
                )
                .then((res) => {
                    setLyrics(res.data.message.body.lyrics);

                    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`);
                })
                .then(res => {
                    setTrack(res.data.message.body.track);
                })
                .catch((err) => console.log(err));
        };

        getLyrics();
    }, [id]);

    if (!lyrics || !track || !Object.keys(track).length || !Object.keys(lyrics).length) {
        return <Spinner />
    } else {
        return (
            <>
                <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                <div className='card'>
                    <h5 className='card-header'>
                        {track.track_name} by {" "}
                        <span className='text-secondary'>
                            {track.artist_name}
                        </span>
                    </h5>
                    <div className='card-body'>
                        <p className='card-text'>
                            {lyrics.lyrics_body}
                        </p>
                    </div>

                </div>

                <ul className='list-group mt-3'>
                    <li className='list-group-item'>
                        <strong>Album Id</strong>: {track.album_id}
                    </li>
                    <li className='list-group-item'>
                        <strong>Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li>
                    <li className='list-group-item'>
                        <strong>Explicit Words</strong>:
                        {track.explicit === 0 ? "No" : "Yes"}
                    </li>
                    <li className='list-group-item'>
                        <strong>Release Date</strong>:
                        <Moment format="MM/DD/YYYY"> {track.first_release_date}</Moment>
                    </li>

                </ul>
            </>
        )
    }
}
