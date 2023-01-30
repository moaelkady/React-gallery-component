import { ReactComponent as LeftArrow } from "./assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "./assets/rightArrow.svg";
import ReturnArrow from "./assets/return.svg";

import "./gallery-model.styles.scss";

const GalleryModel = (props) => {
  const {
    clickedImg,
    setClickedImg,
    handelRightArrowClick,
    handelLeftArrowClick,
  } = props;

  const handleClick = (e) => {
    if (e.target.classList.contains("close")) {
      setClickedImg(null);
    }
  };

  return (
    <div className="gallery-model-container close" onClick={handleClick}>
      <img src={clickedImg} className="model-view-src" alt="full view model" />
      <img
        src={ReturnArrow}
        className="close"
        alt="dds"
        onClick={handleClick}
      />
      <div
        onClick={handelLeftArrowClick}
        className="model-arrow model-arrow-left"
      >
        <LeftArrow />
      </div>
      <div
        onClick={handelRightArrowClick}
        className="model-arrow model-arrow-right"
      >
        <RightArrow />
      </div>
    </div>
  );
};
export default GalleryModel;
