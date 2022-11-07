import React, { useEffect, useState } from "react";
import axios from "axios";
import singleVehicle from "../singleVehicle/SingleVehicle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { VscChromeClose } from "react-icons/vsc";

const SliderCard = () => {
  const [visible, setVisible] = useState(true);

  const [array, setArray] = useState([]);
  const url = "https://rickandmortyapi.com/api";
  const characters = "/character";

  useEffect(() => {
    axios.get(url + characters + "/").then((res) => {
      console.log(res.data.results);
      setArray(res.data.results);
      console.log(array);
    });
  }, []);

  const open = () => {
    setVisible(false);
  };

  const close = () => {
    setVisible(true);
  };
  const images = [
    {
      original: array !== null && array[0]?.image,
      thumbnail: array !== null && array[0]?.image,
    },
    {
      original: array !== null && array[1]?.image,
      thumbnail: array !== null && array[1]?.image,
    },
    {
      original: array !== null && array[2]?.image,
      thumbnail: array !== null && array[2]?.image,
    },
    {
      original: array !== null && array[3]?.image,
      thumbnail: array !== null && array[3]?.image,
    },
    {
      original: array !== null && array[4]?.image,
      thumbnail: array !== null && array[4]?.image,
    },
  ];

  return (
    <>
      <div className="container-pictures">
        <div className="card-ltside">
          {/*<h2>{array[0]?.name}</h2>*/}
          <img className="test" src={array[0]?.image} />
        </div>

        <div className="card">
          <div>
            {/*<h2>{array[1]?.name}</h2>*/}
              <img src={array[1]?.image} />
            {/*<h2>{array[2]?.name}</h2>*/}
              <img src={array[2]?.image} />
          </div>
          <div>
            {/*<h2>{array[3]?.name}</h2>*/}
              <img src={array[3]?.image} />
            {/*<h2>{array[4]?.name}</h2>*/}
              <img src={array[4]?.image} />
            <p className="p-ver-mas" onClick={open}>
              VER MAS
            </p>
          </div>
        </div>
      </div>
      <div className={visible ? "overlay" : "overlay-active"}>
        <div className="pop-up">
          <div className="container-close">
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              /*showIndex={true}*/
              autoPlay={true}
              slideOnThumbnailOver={true}
              items={images}
            />
            <VscChromeClose className="close-gallery" onClick={close} />
          </div>
        </div>
      </div>
      <div className="tablet">
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          showIndex={true}
          autoPlay={true}
          slideOnThumbnailOver={true}
          showThumbnails={false}
          items={images}
        />
      </div>
    </>
  );
};

export default SliderCard;
