import React, {useEffect, useState} from 'react';
import Button from "./components/Button/Button";


function Home (props) {
  const [pi,setPi]=useState();
  useEffect(()=>{
      fetch(`https://api.local.com/api/test`)
          .then(response => response.json())
          .then(data => setPi(data.pi));
  },[])

    return (
      <div className="home-page">
              HOME PAGE GUGddde3
             <Button/>
          <p>Pi:{pi}</p>
      </div>
    );

}

export default Home;
