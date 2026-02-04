import React from "react";
import batman from "../shared/images/Batman.jpg"

import constData from "../shared/constant/constantfile";

const MyImagesComp = () => {
    return(
        <div>
        <h2>This is my Images Component</h2>
        <img src={batman} alt='Batman' height='400px' width='500px'/>
        <img src={constData.Spiderman} alt='Spiderman' height='400px' width='500px'/>

        </div>

     )
    
}

export default MyImagesComp;