import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  const navigate = useNavigate();

  const onNavigateHomeHandler = () => navigate("/");
  const onNavigateShopHandler = () => navigate("/shop");

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
      <>
    
       <h2 className="category-title">{category.toUpperCase()}</h2>
       <h6 className="backs">
         <span  onClick={onNavigateHomeHandler}>
         &larr; Categories 
         </span> 
       
         <span onClick={onNavigateShopHandler}>&larr; Shop
         </span>
         
        </h6>
      
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </>
  );
};

export default Category;
