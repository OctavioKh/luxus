import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products, hash }) => (
  
  <>
 
   <div className='category-preview-container' id={title}>
    
    <Link to={`${title}`} className='title'  id={hash}><h2>{title.toUpperCase()}</h2>
    </Link>
    <h6><Link to={title} >See More +</Link>
 
  </h6>
 
  <div className='preview'>
    {products
      .filter((_, idx) => idx < 4)
      .map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
  </div>
</div></>
 
);

export default CategoryPreview;