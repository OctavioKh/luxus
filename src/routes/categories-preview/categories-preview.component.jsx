import { useContext } from "react";
import { useRef, useEffect } from "react";

// import { Navigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;
    console.log("el2 " + el2);
  }, [ref]);

  console.log("aver", categoriesMap);

  return (
    <>
      <h1>SHOP</h1>
<>
<div className="subnav-container">
{Object.keys(categoriesMap).map((title) => (
        <span key={title} className="subnav">
          <a href={`shop#${title}`}>{title}</a>
        </span>
      ))}
</div>

</>
    

      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
