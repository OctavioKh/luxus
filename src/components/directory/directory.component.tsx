import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "BALENCIAGA",
    imageUrl:
      "https://images.stockx.com/images/Balenciaga-Defender-Beige.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1649795635&q=75",
      route:"shop/balenciaga"
  },
  {
    id: 2,
    title: "DIOR",
    imageUrl:
      "https://images.stockx.com/images/Dior-x-CACTUS-JACK-Hooded-Anorak-Orange-Brown.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1657914215&q=75",
      route: "shop/dior"
  },
  {
    id: 3,
    title: "OFF WHITE",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/14/74/91/97/14749197_25592101_1000.jpg",
      route: "shop/off-white"
  },
  {
    id: 4,
    title: "VERSACE",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/17/49/35/87/17493587_37060753_1000.jpg",
      route: "shop/versace"
  },
  {
    id: 5,
    title: "YEEZY",
    imageUrl:
      "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1617991585",
      route: "shop/yeezy"
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>     
       {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
