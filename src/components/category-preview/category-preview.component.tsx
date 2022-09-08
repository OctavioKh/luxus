import { FC } from 'react';
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import {
  CategoryPreviewContainer,
  Title,
  Preview
} from './category-preview.styles';

import { CategoryItem } from '../../store/categories/categories.types';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
  <>
   <CategoryPreviewContainer id={title}>
    
    <Title to={`${title}`} className='title' ><h3>{title.toUpperCase()}</h3>
    </Title>
    <h6> <Link to={`${title}`} className='title' >See More +
    </Link>
  </h6>
 
  <Preview>
    {products
      .filter((_, idx) => idx < 4)
      .map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Preview>
</CategoryPreviewContainer></>
 
);};

export default CategoryPreview;