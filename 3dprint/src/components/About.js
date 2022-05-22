import React from "react"
import PrintedGear from "../img/PrintedGear.jpg";
// you may want to import hooks like useState() or useEffect() or useContext()
// component name must be capital

function About({props, go, here}) {
    // here you define useState hooks or useEffect hooks or any other stuff you want to use in your component
    
    return (
        <>
        {/* html goes here */}
            <h1>About 3D Printing</h1>
            <p>The 3D printing process involves building up layer upon layer of molten plastic to create an object. As each layer sets, the next layer is printed on top and the object is built up.

To make a 3D print, a digital file is needed that tells the 3D printer where to print the material. The most common file format for this is the G-code files. This file essentially contains ‘coordinates’ to guide the printer’s movements, both horizontally and vertically – also known as the X, Y, and Z axes.

3D printers can print these layers at different thicknesses, known as layer height. A bit like pixels on a screen, more layers in a print will give a higher ‘resolution’. This will give a better-looking result, but take longer to print.

3D printing vs. additive manufacturing?
This adding up of layers gives 3D printing its alternative name – ‘additive manufacturing’.

You will often see the terms used to refer to the same manufacturing process. Additive manufacturing is the opposite of ‘subtractive’ processes where material is removed (or subtracted) from a larger block to create the final object, for example CNC machining.

FDM vs FFF 3D printing – explained
Another thing that may confuse newcomers to 3D printing is seeing references to FDM (fused deposition modeling) and FFF (fused filament fabrication) processes. Again, these are essentially different names for the same thing as they both refer to a specific type of 3D printer.

There are different types of 3D printer? Yes! But no need to be confused – we’ll take a quick look at these next.</p>
<img src={PrintedGear}></img>
        </>
    )
}

export default About

// remember to IMPORT the exported component into a parent component. (App.js for example)