import React from "react";
import { useState } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Cards/Footer'
import {Outlet} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <h1 className=' text-red-500'>Hello</h1> */}
      <Navbar />

      <Outlet />
      
      <Footer />
    </>
  );
}

export default App;
