import React from "react"
// you may want to import hooks like useState() or useEffect() or useContext()
// component name must be capital

function ComponentName({props, go, here}) {
    // here you define useState hooks or useEffect hooks or any other stuff you want to use in your component

    return (
        <>
        {/* html goes here */}
            <h2>Hello, Friends</h2>
        </>
    )
}

export default ComponentName

// remember to IMPORT the exported component into a parent component. (App.js for example)