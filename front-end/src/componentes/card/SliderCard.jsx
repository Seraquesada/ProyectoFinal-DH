import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { VscChromeClose } from "react-icons/vsc";

const SliderCard = ({respuesta}) => {
  const [visible, setVisible] = useState(true);

  const open = () => {
    setVisible(false);
  };

  const close = () => {
    setVisible(true);
  };
  const images = [
    {
      original: respuesta.imagenes !== null && respuesta.imagenes[0]?.url,
      thumbnail: respuesta.imagenes !== null && respuesta.imagenes[0]?.url,
    },
    {
      original: respuesta.imagenes !== null && respuesta.imagenes[1]?.url,
      thumbnail: respuesta.imagenes !== null && respuesta.imagenes[1]?.url,
    },
    {
      original: respuesta.imagenes !== null && respuesta.imagenes[2]?.url,
      thumbnail: respuesta.imagenes !== null && respuesta.imagenes[2]?.url,
    },
    {
      original: respuesta.imagenes !== null && respuesta.imagenes[3]?.url,
      thumbnail: respuesta.imagenes !== null && respuesta.imagenes[3]?.url,
    },
    {
      original: respuesta.imagenes !== null && respuesta.imagenes[4]?.url,
      thumbnail: respuesta.imagenes !== null && respuesta.imagenes[4]?.url,
    },
  ];

  return (
    <>
      <div className="container-pictures">
        <div className="card-ltside">
          {/*<h2>{array[0]?.name}</h2>*/}
          <img loading="lazy" className="test" src={respuesta.imagenes[0]?.url} />
        </div>

        <div className="card">
          <div>
            {/*<h2>{array[1]?.name}</h2>*/}
              <img loading="lazy" src={respuesta.imagenes[1]?.url} />
            {/*<h2>{array[2]?.name}</h2>*/}
              <img loading="lazy" src={respuesta.imagenes[2]?.url} />
          </div>
          <div>
            {/*<h2>{array[3]?.name}</h2>*/}
              <img loading="lazy" src={respuesta.imagenes[3]?.url} />
            {/*<h2>{array[4]?.name}</h2>*/}
              <img loading="lazy" src={respuesta.imagenes[4]?.url} />
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
