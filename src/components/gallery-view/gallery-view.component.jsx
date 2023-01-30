import "./gallery-view.styles.scss";

const GalleryView = ({ portfolioData }) => {
  return (
    <div className="gallery-view-container">
      <div className="gallery-view">
        {portfolioData.map(({ id, category, title, imgSrc }) => (
          <div className={"gallery-item " + category} key={id}>
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
  );
};

export default GalleryView;
