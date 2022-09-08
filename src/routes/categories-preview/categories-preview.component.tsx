import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap,  selectCategoriesIsLoading
} from "../../store/categories/categories.selector";

import { SubnavContainer, Subnav } from  "./categories-preview.styles";

import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);


  return (
    <Fragment>
      <h1>SHOP</h1>
        {isLoading ? (<Spinner/>) : (
          <>
          <Fragment>
          <SubnavContainer>
            {Object.keys(categoriesMap).map((titule) => {
              return (
                <Subnav key={`categoria${titule}`} >
                  <a
                    href={`shop#${titule}`}
                    key={`a${titule}`}
                    className={`subnav-${titule}`}
                  >
                    {titule}
                  </a>
                </Subnav>
              );
            })}
          </SubnavContainer>
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
