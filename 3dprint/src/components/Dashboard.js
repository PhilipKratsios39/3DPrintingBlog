import React, {useState, useEffect} from "react"
import Post from "./Post"
import Comment from "./Comment"
import NewPost from "./NewPost"
import { useBetween } from "use-between"
import {useShareMyStates} from "./sharedStates"

import styled from "styled-components"


function Dashboard() {

    const [userPostsState, setUserPosts] = useState([])
    const [commentsState, setCommentsState] = useState([])

    const {newPostBtn, setNewPostBtn, currentUserId, setCurrentUserId} = useShareMyStates()
    

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

                let currentUserPosts = []
        
                for (let i=0; i<data.length; i++) {
                    if (data[i].userId == currentUserId) {
                        currentUserPosts.push(data[i])
                    }
                }

                setUserPosts(currentUserPosts)
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

    console.log("userPostsState", userPostsState)
    const FlexBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    
    const HorizRule = styled.hr`
    width: 50%;
`
    
   
      
    return (
        <>  

            <FlexBox>
                <h1>These Are Your Posts!</h1>
                <HorizRule></HorizRule>
                    <button onClick={() => setNewPostBtn(true)}>Write New Post</button>
                    {newPostBtn ? <NewPost /> : <></>}
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

export default Dashboard