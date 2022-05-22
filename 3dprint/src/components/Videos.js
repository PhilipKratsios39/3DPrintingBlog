import React from "react"
// you may want to import hooks like useState() or useEffect() or useContext()
// component name must be capital

function Videos({props, go, here}) {
    // here you define useState hooks or useEffect hooks or any other stuff you want to use in your component

    return (
        <>
        {/* html goes here */}
            <h2>Hello, Friends</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5S5IpS43AZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}

export default Videos

// remember to IMPORT the exported component into a parent component. (App.js for example)