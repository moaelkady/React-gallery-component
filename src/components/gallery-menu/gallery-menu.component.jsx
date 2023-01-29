import { Fragment, useState } from "react";
import GalleryView from "../gallery-view/gallery-view.component";

import "./gallery-menu.styles.scss";

const GalleryMenu = ({ portfolioData }) => {

  const [filterdData, setFilterdData] = useState(portfolioData);

  const handleChoice = (e) => {
    const filterName = e.target.attributes["data-filter"].value;

    if (filterName === "*") {
      setFilterdData(portfolioData);
      return;
    }

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
            <li className="active" data-filter="*" onClick={handleChoice}>
              All Work
            </li>
            <li data-filter="ui-ux" onClick={handleChoice}>
              UI/UX
            </li>
            <li data-filter="graphics" onClick={handleChoice}>
              Graphics
            </li>
            <li data-filter="logo" onClick={handleChoice}>
              Logos
            </li>
            <li data-filter="website" onClick={handleChoice}>
              Website
            </li>
            <li data-filter="landing-page" onClick={handleChoice}>
              Landing Pages
            </li>
            <li data-filter="html-email" onClick={handleChoice}>
              HTML Emails
            </li>
          </ul>
        </div>
      </div>
      <GalleryView portfolioData={filterdData} />
    </Fragment>
  );
};

export default GalleryMenu;
