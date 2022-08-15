import "./category-item.style.scss";

const CategoryItem = ({ category  }) => {
  
  const { title, imgSrc } = category;
    return (
    <div className="categoria-container">
      <div
        className="background-image"
        alt=""
        style={{ backgroundImage: `url(${imgSrc})` }}
      />

      <div className="categoria-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
