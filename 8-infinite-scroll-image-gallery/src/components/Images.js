import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Image } from "./Image";
const IMAGE_COUNT = 30;
export const Images = () => {
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);

  useEffect(() => {
    const getImages = () => {
      axios
        .get(`/api/photos?count=${IMAGE_COUNT}&start=${start}`)
        .then((res) => {
          setImages((i) => [...i, ...res.data.response.results]);
        });
    };
    getImages();
  }, [start]);

  const incrementStart = () => {
    setStart(IMAGE_COUNT + start);
  };

  return (
    <div className="images">
      <InfiniteScroll
        dataLength={images.length}
        next={incrementStart}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {images.map((image, index) => (
          <Image key={index} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
