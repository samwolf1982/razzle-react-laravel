import React, {useEffect, useState,Suspense} from 'react';
import Button from "./components/Button/Button";

const Elem=()=>{
    return null;
    return <div>Загрузка...</div>
}

function Home (props) {
  const [pi,setPi]=useState();
  useEffect(()=>{
      fetch(`https://api.local.com/api/test`)
          .then(response => response.json())
          .then(data => setPi(data.pi));
  },[])

    return (
        <React.Fragment>
            <div className="home-page">
            HOME PAGE GUGddde3
            <Button/>
            <p>Pi:{pi}</p>
        </div>
        </React.Fragment>
    );
    // if(!pi){
    //     return null
    // }
    // if(typeof window === "undefined"){
    //     // return  e
    //     return (
    //         <React.Fragment>
    //         <Elem/><div className="home-page">
    //                 HOME PAGE GUGddde3
    //                 <Button/>
    //                 <p>Pi:{pi}</p>
    //             </div>
    //         </React.Fragment>
    //     );
    // }else{
    //     return (
    //             <div className="home-page">
    //                 HOME PAGE GUGddde3
    //                 <Button/>
    //                 <p>Pi:{pi}</p>
    //             </div>
    //     );
    // }


}

export default  Home;
