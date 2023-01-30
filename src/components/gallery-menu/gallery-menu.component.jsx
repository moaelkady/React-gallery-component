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
              All Work
            </li>
            <li
              className="gallery-menu-item"
              data-filter="ui-ux"
              onClick={handleChoice}
            >
              UI/UX
            </li>
            <li
              className="gallery-menu-item"
              data-filter="graphics"
              onClick={handleChoice}
            >
              Graphics
            </li>
            <li
              className="gallery-menu-item"
              data-filter="logo"
              onClick={handleChoice}
            >
              Logo
            </li>
            <li
              className="gallery-menu-item"
              data-filter="website"
              onClick={handleChoice}
            >
              Website
            </li>
            <li
              className="gallery-menu-item"
              data-filter="landing-page"
              onClick={handleChoice}
            >
              Landing Page
            </li>
            <li
              className="gallery-menu-item"
              data-filter="html-email"
              onClick={handleChoice}
            >
              HTML Email
            </li>
          </ul>
        </div>
      </div>
      <GalleryView portfolioData={filterdData} />
    </Fragment>
  );
};

export default GalleryMenu;
