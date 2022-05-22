import React, {useState} from "react"
import {useShareMyStates} from "./sharedStates"


function NewPost() {

    const {newPostBtn, setNewPostBtn, currentUserId} = useShareMyStates()

    const [newPostState, setNewPostState] = useState({
        "userId": "",
        "postTitle": "",
        "postContent": ""
    })

    function handleNewPostSubmit(e) {
        e.preventDefault()
        console.log("Post Submitted")

        fetch('/newPost',{
            method: 'POST',
            headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newPostState)
      })
        .then(function (response) {
            return response.json()
        })
      
        

        setNewPostState({
            "userId": "",
            "postTitle": "",
            "postContent": ""
        })

        setNewPostBtn(false)
}

    
    

    return (
        <>
            <form onSubmit={handleNewPostSubmit}>
                <input type="text" placeholder="Post Title" onInput ={e => setNewPostState({
                    ...newPostState,
                    "userId": currentUserId,
                    "postTitle": e.target.value
                }) } />
                <textarea placeholder="Write new post here" onInput={e => setNewPostState({
                        ...newPostState,
                        "postContent": e.target.value
                    })}></textarea>
                <input type="submit" value="submit"/>
            </form>
        </>
    )
}

export default NewPost