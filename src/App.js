import Directory from './components/directory/directory.component';


const App = () => {
  const categorias = [
    { id: 1, title: "SNEAKERS", imgSrc: 'https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600,c_limit/Osofsky_Oct19-571.jpg' },
    { id: 2, title: "CLOTHING", imgSrc: 'https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600,c_limit/Osofsky_Oct19-571.jpg' },
    { id: 3, title: "EYEWEAR", imgSrc: 'https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600,c_limit/Osofsky_Oct19-571.jpg' },
    { id: 4, title: "ACCESORIES", imgSrc: 'https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600,c_limit/Osofsky_Oct19-571.jpg' },

    { id: 5, title: "MEN", imgSrc: 'https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600,c_limit/Osofsky_Oct19-571.jpg' },
    { id: 6, title: "WOMEN", imgSrc: 'https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600,c_limit/Osofsky_Oct19-571.jpg' },
    // { id: 6, title: "WOMEN", imgSrc: 'https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600,c_limit/Osofsky_Oct19-571.jpg' },
  ];

  return (
   <Directory categories={categorias}/>
  );
};

export default App;
