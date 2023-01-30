import { Fragment, useState } from "react";
import GalleryModel from "../gallery-model/gallery-model.component";

import "./gallery-view.styles.scss";

const GalleryView = ({ portfolioData }) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentImgId, setCurrentImgId] = useState(null);

  const handleGalleryItemClick = (id, src) => {
    setCurrentImgId(id);
    setClickedImg(src);
  };

  const handelRightArrowClick = () => {
    const portfolioDataLength = portfolioData.length;
    if (currentImgId + 1 >= portfolioDataLength) {
      setCurrentImgId(0);
      const newImgSrc = portfolioData[0].imgSrc;
      setClickedImg(newImgSrc);
      return;
    }
    const newImgId = currentImgId + 1;
    const newImgSrc = portfolioData.filter((item) => {
      return portfolioData.indexOf(item) === newImgId;
    });
    const newItem = newImgSrc[0].imgSrc;
    setClickedImg(newItem);
    setCurrentImgId(newImgId);
  };

  const handelLeftArrowClick = () => {
    const portfolioDataLength = portfolioData.length;
    if (currentImgId === 0) {
      setCurrentImgId(portfolioDataLength - 1);
      const newImgSrc = portfolioData[portfolioDataLength - 1].imgSrc;
      setClickedImg(newImgSrc);
      return;
    }
    const newImgId = currentImgId - 1;
    const newImgSrc = portfolioData.filter((item) => {
      return portfolioData.indexOf(item) === newImgId;
    });

    const newItem = newImgSrc[0].imgSrc;
    setClickedImg(newItem);
    setCurrentImgId(newImgId);
  };

  return (
    <Fragment>
      <div className="gallery-view-container">
        <div className="gallery-view">
          {portfolioData.map(({ id, category, title, imgSrc }) => (
            <div
              className={"gallery-item " + category}
              key={id}
              onClick={() => handleGalleryItemClick(id, imgSrc)}
            >
              <div className="item-box">
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${imgSrc})` }}
                ></div>
                <div className="content">
                  <div className="tags">
                    <h3>{category}</h3>
                  </div>
                  <div className="title">
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {clickedImg && (
        <GalleryModel
          clickedImg={clickedImg}
          handelRightArrowClick={handelRightArrowClick}
          setClickedImg={setClickedImg}
          handelLeftArrowClick={handelLeftArrowClick}
        />
      )}
    </Fragment>
  );
};

export default GalleryView;
