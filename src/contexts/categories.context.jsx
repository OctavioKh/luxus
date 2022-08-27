import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocuments,  
  
  // getCategs

} from "../utils/firebase/firebase.utils";

// import SHOP_DATA from "../shop-data.json";

export const CategoriesContext = createContext({
  categoriesMap: {}});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // const [catesMap, setCatesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
const categoryMap = await getCategoriesAndDocuments();

console.log("categoryMap :",categoryMap);
setCategoriesMap(categoryMap); 
// console.log("categoriesMap",categoriesMap);

    }
   getCategoriesMap();
  },[])

// getCategs();

// useEffect(() => {
// const getCatesMap = async() => {
// const cateMap = await getCategs();
// setCatesMap(cateMap);
// console.log("catesmap", catesMap);
// console.log("catemap", cateMap);
// }
// getCatesMap();
// }
// ,[])


//   useEffect(() => {
//     const getCateMap = async () => {
// const categoMap = await getCates();
// setCatesMap(categoMap);

//     }
//     getCateMap()

//   },[])
  // console.log("categomap", categoMap);


//   useEffect(() => {
//     const getCatesMap = async () => {
// const cateMap = await getCates();

// setCatesMap(cateMap);
// console.log("catemap", cateMap);
//     }
//    getCatesMap();
//   },[])


  const value = { categoriesMap };
  // const valor = {catesMap}
  return (
    <CategoriesContext.Provider  value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
