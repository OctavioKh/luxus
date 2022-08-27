import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
// import { useState } from "react";



const Home = () => {
// const { categoriesMap} = useContext(CategoriesContext)
// const [categorixs] = useState({...categoriesMap});

// console.log("ayo",categoriesMap);

  // console.log("foo",categorias);
  // console.log("bar",categorixs);
  return (
      <div>
   <Directory/>
<Outlet/>
      </div>
  );
};

export default Home;
