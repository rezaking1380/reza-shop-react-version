

import {useState , useEffect} from 'react'


import Mycontext from "./context";
import Pages from "./pages/Pages";
import Loading from "./components/Loading";

function App() {
 const [products, setproducts] = useState()
  const fetcher = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setproducts(data)
    }

    useEffect(() => {
      fetcher()
    }, [ ])

    

  return (
    <>
    
    <Mycontext.Provider value={products}>
      {!products ? <Loading /> : <Pages /> }
    </Mycontext.Provider>
    
    </>
  );
}

export default App;
