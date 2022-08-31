// import { useContext } from "react";
// import { useRef, useEffect } from "react";

// import { Navigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap,  selectCategoriesIsLoading
} from "../../store/categories/categories.selector";

import "./categories-preview.styles.scss";

import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const el2 = ref.current;
  //   console.log("el2 " + el2);
  // }, [ref]);

  // console.log("aver", categoriesMap);

  return (
    <Fragment>
      <h1>SHOP</h1>
        {isLoading ? (<Spinner/>) : (
          <>
          <Fragment>
          <div className="subnav-container">
            {Object.keys(categoriesMap).map((titule) => {
              return (
                <span key={`categoria${titule}`} className="subnav">
                  <a
                    href={`shop#${titule}`}
                    key={`a${titule}`}
                    className={`subnav-${titule}`}
                  >
                    {titule}
                  </a>
                </span>
              );
            })}
          </div>
        </Fragment>
        <Fragment>
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <Fragment key={title}>
                <CategoryPreview key={title} title={title} products={products} />
              </Fragment>
            );
          })}
        </Fragment>
        </>
        )}

      
    </Fragment>
  );
};

export default CategoriesPreview;
