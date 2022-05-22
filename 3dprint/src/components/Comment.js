import React, { useState, useEffect} from "react"
import styled from "styled-components"

function Comment({commentObj}) {
    const CommentDiv = styled.div`
    border: solid ;
    border-width: 3px;
    border-color: green;
    margin: 50px;
    width: 500px;
    height: 250px;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

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
             <CommentDiv value={commentObj._id}>
                <p>{commentObj.commentContent}</p>
                {
                    usersState.map((user) => {
                        if (commentObj.userId == user._id) {
                                return <h3>--{user.userName}</h3>
                        }
                    })
                }
            </CommentDiv>
        </>
    )
}

export default Comment