import { portfolioData } from "../../data/portfolio.data";
import GalleryMenu from "../gallery-menu/gallery-menu.component";

import "./portfolio-gallery.styles.scss";

const PortfolioGallery = () => {
  return (
    <div className="portfolio-gallery-container">
      <div className="portfolio-gallery">
        <GalleryMenu portfolioData={portfolioData} />
      </div>
    </div>
  );
};

export default PortfolioGallery;
