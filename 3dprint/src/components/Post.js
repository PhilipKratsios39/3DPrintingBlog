import React, {useEffect, useState} from "react"
import styled from "styled-components"
import Comment from "./Comment"
import NewComment from "./NewComment"
import {useShareMyStates} from "./sharedStates"



function Post({postObj}) {

    const {isLoggedInState, setIsLoggedInState, currentUserId, setCurrentUserId} = useShareMyStates()

    const PostDiv = styled.div`
        border: solid ;
        border-width: 3px;
        border-color: blue;
        margin: 50px;
        width: 500px;
        height: 250px;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
    `
const {newCommentBtn, setNewCommentBtn} = useShareMyStates()

const [usersState, setUsersState] = useState([])


useEffect(() => {
    function getAllUsers() {
        fetch('/getUsers',{
            method: 'GET',
            headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            setUsersState(data)
            //console.log(data);
        });
    }
    getAllUsers()
  }, []);

     
    
    

    return (
        <>
            <PostDiv value={postObj._id}>
                <h1>{postObj.postTitle}</h1>
                <p>{postObj.postContent}</p>
                {
                    usersState.map((user) => {
                        if (postObj.userId == user._id) {
                                return <h3>--{user.userName}</h3>
                        }
                    })
                }
                {/* TODO: The comment button will only be availbe if the user is logged in */}

                {isLoggedInState ? <button onClick={() => {setNewCommentBtn(true)}}>Comment</button> : <></>}

                

            </PostDiv>
            {newCommentBtn ? <NewComment postNum={postObj._id} /> : <></>}
        </>
    )

}

export default Post