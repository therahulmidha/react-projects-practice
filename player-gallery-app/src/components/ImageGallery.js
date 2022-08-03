import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useEffect, useState } from "react";
import * as moment from 'moment';
import "./ImageGallery.css"

export function ImageGallery() {
    const [originalImageData, setOriginalImageData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.npoint.io/20c1afef1661881ddc9c")
            .then((res) => res.json())
            .then((data) => {
                data.playerList.sort((a, b) => +a.Value - +b.Value)
                setImageData(data.playerList);
                setOriginalImageData(data.playerList);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const getMatchDateTime = (dateTime) => {
        if (dateTime === "") return "NA";
        return moment(new Date(dateTime)).local(true).format("DD-MM-YYYY h:mm:ss a");
    }

    const getUpcomingMatch = (matchList) => {
        if (matchList[0].CCode === "" || matchList[0].VsCCode === "") {
            return "NA";
        }
        return `${matchList[0].CCode} vs ${matchList[0].VsCCode}`;
    }

    const searchOnChangeHandler = (event) => {
        setSearchValue(event.target.value);
    }

    useEffect(() => {
        let setImageDataTimeout;
        if (searchValue !== '') {
            setImageDataTimeout = setTimeout(() => {
                const players = originalImageData.filter((image) => image.PFName.toLowerCase().includes(searchValue.toLowerCase()) || image.TName.toLowerCase().includes(searchValue.toLowerCase()))
                setImageData(players.length ? [...players] : [])
            }, 500);
        } else {
            setImageData(originalImageData);
        }

        return () => clearTimeout(setImageDataTimeout);
    }, [originalImageData, searchValue]);

    return (
        <>
            <div className="player-search">
                <input placeholder="Search a Player or a Team's name" value={searchValue} onChange={searchOnChangeHandler} />
            </div>
            {isLoading ? <div className="spinner"><img src="/spinner.gif" alt="Loading..." /></div> :
                imageData.length ?
                    <ImageList cols={4} >
                        {imageData.map((item) => (
                            <ImageListItem key={item.Id}>
                                <img
                                    src={`/player-images/${item.Id}.jpg`}
                                    alt={item.PFName}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.PFName}
                                    subtitle={
                                        <div>
                                            <span><strong>Skill:</strong> {item.SkillDesc}</span><br />
                                            <span><strong>Value:</strong> ${item.Value}bn</span><br />
                                            <span><strong>Upcoming Match:</strong> {getUpcomingMatch(item.UpComingMatchesList)}</span><br />
                                            <span><strong>Match Date:</strong> {getMatchDateTime(item.UpComingMatchesList[0].MDate)}</span><br />
                                        </div>
                                    }
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    : <h1> No player found</h1>
            }
        </>
    );
}
