import { MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageResults } from "./ImageResults";

const API_URL = "https://pixabay.com/api";
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
let initial = true;

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(5);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imageResponse = await axios.get(
        `${API_URL}/?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
      );
      setImages(imageResponse.data.hits);
    };
    if (initial) {
      initial = false;
      return;
    }
    if (searchText === "") {
      setImages([]);
      return;
    }
    const timeoutId = setTimeout(() => {
      getImages().catch((error) => alert(error));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText, amount]);

  const onTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <TextField
        label="Search for Images"
        InputProps={{
          type: "search",
        }}
        value={searchText}
        onChange={onTextChange}
        fullWidth={true}
      />
      <br />
      <Select
        id="demo-simple-select"
        label="Amount"
        value={amount}
        onChange={onAmountChange}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
      </Select>
      <br />
      {images.length ? <ImageResults images={images} /> : null}
    </>
  );
};
