import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoryContainer, Title, Backs, BackSpan } from './category.styles';

// import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
 
  const navigate = useNavigate();

  const onNavigateHomeHandler = () => navigate("/");
  const onNavigateShopHandler = () => navigate("/shop");

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
      <Fragment>
    
       <Title>{category.toUpperCase()}</Title>
       {isLoading ? (
         <Fragment> <Spinner/> </Fragment>) : 
       (
       <Fragment>
          <Backs>
        <BackSpan  onClick={onNavigateHomeHandler}>
        &larr; Categories 
        </BackSpan> 
      
        <BackSpan onClick={onNavigateShopHandler}>&larr; Shop
        </BackSpan>
        
       </Backs>
     
   <CategoryContainer>
   {products &&
       products.map((product) => (
         <ProductCard key={product.id} product={product} />
       ))}
   </CategoryContainer>
       </Fragment>
      
    )}
       
    
    </Fragment>
  );
};

export default Category;
