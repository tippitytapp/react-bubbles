import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then(res=> {
      console.log(`res from bubblepage .get`, res);
    })
    .catch(err => {
      console.log(`error from bubblepage .get ${err}`)
    })
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
