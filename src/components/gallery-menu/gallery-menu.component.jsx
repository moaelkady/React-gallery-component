import { Fragment, useState } from "react";
import GalleryView from "../gallery-view/gallery-view.component";

import "./gallery-menu.styles.scss";

const GalleryMenu = ({ portfolioData }) => {
  const [filterdData, setFilterdData] = useState(portfolioData);

  const clearActive = (ele) => {
    const GalleryMenuItems =
      document.getElementsByClassName("gallery-menu-item");
    for (let i = 0; i < GalleryMenuItems.length; i++) {
      GalleryMenuItems[i].classList.remove("active");
    }
    ele.classList.add("active");
  };

  const handleChoice = (e) => {
    const filterName = e.target.attributes["data-filter"].value;

    if (filterName === "*") {
      setFilterdData(portfolioData);
      clearActive(e.target);

      return;
    }

    clearActive(e.target);

    const filterd = portfolioData.filter(
      ({ category }) => filterName === category
    );

    setFilterdData(filterd);
    return;
  };

  return (
    <Fragment>
      <div className="gallery-menu-container">
        <div className="gallery-menu">
          <ul>
            <li
              className="gallery-menu-item active"
              data-filter="*"
              onClick={handleChoice}
            >
              All Categories
            </li>
            <li
              className="gallery-menu-item"
              data-filter="category1"
              onClick={handleChoice}
            >
              Category1
            </li>
            <li
              className="gallery-menu-item"
              data-filter="category2"
              onClick={handleChoice}
            >
              Category2
            </li>
            <li
              className="gallery-menu-item"
              data-filter="category3"
              onClick={handleChoice}
            >
              Category3
            </li>
            <li
              className="gallery-menu-item"
              data-filter="category4"
              onClick={handleChoice}
            >
              Category4
            </li>
            <li
              className="gallery-menu-item"
              data-filter="category5"
              onClick={handleChoice}
            >
              Category5
            </li>
            <li
              className="gallery-menu-item"
              data-filter="category6"
              onClick={handleChoice}
            >
              Category6
            </li>
          </ul>
        </div>
      </div>
      <GalleryView portfolioData={filterdData} />
    </Fragment>
  );
};

export default GalleryMenu;
