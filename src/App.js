

import {useState , useEffect} from 'react'


import Mycontext from "./context";
import Pages from "./pages/Pages";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from 'react-redux';
import { allproduct } from './Redux/reducer/Api';

function App() {
  const initState = useSelector(state => state.Allproduct.allproduct)
const dispatch = useDispatch()
useEffect(() => {
  if(initState.length === 0)
    dispatch(allproduct())
}, [dispatch, initState.length]);

    

  return (
    <>
    
    <Mycontext.Provider value={initState}>
      {!initState ? <Loading /> : <Pages /> }
    </Mycontext.Provider>
    
    </>
  );
}

export default App;
