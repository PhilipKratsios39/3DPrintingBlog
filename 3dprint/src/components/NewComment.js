import React, {useState} from "react"
import styled from "styled-components"
import {useShareMyStates} from "./sharedStates"


function NewComment({postNum}) {

const FancyDiv = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    border: solid;
    margin: 20px;
    padding: 30px;
    border-width: 2px;
    border-color: purple;
`
const {newCommentBtn, setNewCommentBtn, currentUserId} = useShareMyStates()

const [newCommentState, setNewCommentState] = useState({
    "userId": "",
    "postId": "",
    "commentContent": ""
})

function handleNewCommentSubmit(e) {
    e.preventDefault()
    console.log(newCommentState)
    
    fetch('/newComment',{
            method: 'POST',
            headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newCommentState)
      })
        .then(function (response) {
            return response.json()
        })
      
        console.log("this is the postNum", postNum)

        setNewCommentState({
            "userId": "123",
            "postId": "",
            "commentContent": ""
        })

        setNewCommentBtn(false)

}
// 
    return (
        <>

                <form onSubmit={handleNewCommentSubmit}>
                    {/* <FancyDiv> */}

                 
                    <textarea placeholder="Write your comment here" value={newCommentState.commentContent} onInput={e => setNewCommentState({
                        ...newCommentState,
                        "postId": Object.values({postNum})[0],
                        "userId": currentUserId,
                        "commentContent": e.target.value
                    })}></textarea>
                    <input type="submit" value="submit"/>
                    {/* <button onClick={()=> setNewCommentBtn(false)}>Cancel</button> */}
                    {/* </FancyDiv> */}
                </form>
           
        
        </>
    )
}



export default NewComment