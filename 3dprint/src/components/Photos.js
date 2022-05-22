import React from "react"
import photoOne from "../img/3Dprintimage.png"
import photoTwo from "../img/3dprint2.jpg"
import photoThree from "../img/PrintedGear.jpg"
import photoFour from "../img/sla.jpg"
// you may want to import hooks like useState() or useEffect() or useContext()
// component name must be capital

function Photos({props, go, here}) {
    // here you define useState hooks or useEffect hooks or any other stuff you want to use in your component

    return (
        <>
        {/* html goes here */}
            <h1>Welcome to the photo page </h1>
            <div id="photoDiv">
            <img className="photoPage" src ={photoOne} />
            <img className="photoPage"  src={photoTwo}/>
            <img className="photoPage" src={photoThree}/>
            <img className="photoPage" src={photoFour}/>
            </div>
           
            
        </>
    )
}

export default Photos

// remember to IMPORT the exported component into a parent component. (App.js for example)