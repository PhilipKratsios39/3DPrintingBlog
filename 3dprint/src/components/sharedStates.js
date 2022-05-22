import React, {useState} from "react"
import { useBetween } from "use-between"

const useSharedStates = ()=> {
   
    const [isLoggedInState, setIsLoggedInState] = useState(false)
    const [currentUserId, setCurrentUserId] = useState("")
    const [newCommentBtn, setNewCommentBtn] = useState(false)
    const [newPostBtn, setNewPostBtn] = useState(false)


    return {
        isLoggedInState, setIsLoggedInState, currentUserId, setCurrentUserId, newCommentBtn, setNewCommentBtn, newPostBtn, setNewPostBtn
    }
}

const useShareMyStates = ()=> useBetween(useSharedStates)

export {useShareMyStates}