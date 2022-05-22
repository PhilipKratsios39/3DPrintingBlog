import React from "react"
import styled from "styled-components"
import { BrowserRouter, Route, Routes, Link} from "react-router-dom"
import {useShareMyStates} from "./sharedStates"


// you may want to import hooks like useState() or useEffect() or useContext()
// component name must be capital

function NavBar() {

    const {isLoggedInState, setIsLoggedInState, currentUserId, setCurrentUserId} = useShareMyStates()


    const UnorderedList = styled.ul`
        display: flex;
        list-style: none;
    `
    const ListItem = styled.li`
        margin: 20px;
    `

    const Flex = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    // here you define useState hooks or useEffect hooks or any other stuff you want to use in your component
    
    return (
        <>
        {/* html goes here */}
            <Flex>


          
            <h1>Welcome to the world of 3D Printing</h1>
        
            
            <UnorderedList>
                <ListItem>
                    <Link to="/articleFeed">View Recent Articles</Link>
                </ListItem>   
              
                {isLoggedInState ?   <ListItem> <Link to="/dashboard">Dashboard</Link> </ListItem> : <></>}
              
                <ListItem>
                    <Link to="/discussion">Discussion</Link>
                </ListItem>  
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>  
                <ListItem>
                    {isLoggedInState ? <button onClick={()=> setIsLoggedInState(false)}>Log Out</button> :  <Link to="/signIn">Sign In</Link>}
                </ListItem>  
                <ListItem>
                   <Link to="/photos">Photos</Link>
                </ListItem>  

                 <ListItem>
                    <Link to="/videos">Videos</Link>
                </ListItem>   
                  
             
            </UnorderedList>

       
           
           
           
            </Flex>
        </>
    )
}

export default NavBar

// remember to IMPORT the exported component into a parent component. (App.js for example)
