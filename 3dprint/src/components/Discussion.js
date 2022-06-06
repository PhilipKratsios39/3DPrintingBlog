import React, {useState, useEffect}from "react"
import Post from "./Post"
import styled from "styled-components"
import Comment from "./Comment"

function Discussion () {
    const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

    const HorizRule = styled.hr`
        width: 50%;
    `

const [userPostsState, setUserPosts] = useState([])
const [commentsState, setCommentsState] = useState([])

useEffect(() => {
    //Runs only on the first render
    function getUserPosts() {
        fetch('/getPosts',{
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
            setUserPosts(data)
            //console.log(data);
        });
    }

    function getAllComments() {
        fetch('/getComments',{
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
            setCommentsState(data)
            //console.log(data);
        });
    }
   
       
    getUserPosts()
    getAllComments()
   
  
    }, []);

    return (
        <>
                 <FlexBox>
                     <h1>Community Discussion</h1>
                     <HorizRule></HorizRule>

                     
                 {
                userPostsState.map((post) => {
                    return (
                        <>
                            <Post postObj = {post}/>
                            {
                                commentsState.map((comment) => {
                                    if (comment.postId == post._id) {
                                        return <Comment commentObj={comment}/>
                                    }
                                })
                            }
                         </>
                        
                       
                    )

                })

            }
               </FlexBox>
        
        </>
    )


}

export default Discussion