import {React, useState, useEffect } from "react"
// you may want to import hooks like useState() or useEffect() or useContext()
// component name must be capital
import styled from "styled-components"
import {useShareMyStates} from "./sharedStates"

function SignIn() {
    // here you define useState hooks or useEffect hooks or any other stuff you want to use in your component

const SignInForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DisplayDiv = styled.div`
   display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const VertLine = styled.hr`
  width: 2px;
  height: 175px;
  margin: 15px;
  background-color: blue;
`

const {isLoggedInState, setIsLoggedInState, currentUserId, setCurrentUserId} = useShareMyStates()

const [signInState, setSignInState] = useState({
  "userName": "",
  "password": ""
})


const [signUpState, setSignUpState] = useState({
  "userName": "",
  "password": ""
})

const [retrievedUserState, setRetrievedUserState] = useState({})

 
useEffect(() => {
  fetch(`/getUser/${signInState.userName}`,{
    method: 'GET',
    headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },

  })
  .then(function (response) {
      return response.json()
  })
  .then(function (data) {
    setRetrievedUserState(data)
   
  })

}, [signInState])

function handleSignInSubmit(e) {
  e.preventDefault()

  console.log(retrievedUserState, "reusersate")
  console.log(retrievedUserState.password, signInState.password)

  if(retrievedUserState.password == signInState.password) {
    setIsLoggedInState(true)
    setCurrentUserId(retrievedUserState._id)
    alert("Logged In")
  } else {
    // alert("Incorrect Password")
  }

  setSignInState({
    "userName": "",
    "password": ""
  })

  setRetrievedUserState({})

}

function handleSignUpSubmit(e) {
  e.preventDefault()
  fetch('/newUser',{
    method: 'POST',
    headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
},
body: JSON.stringify(signUpState)
})
.then(function (response) {
    return response.json()
})

setSignUpState({
    "userName": "",
    "password": ""
})
}

    return (
        <>
            <h1>Welcome to the sign in page </h1>
            

      {/* <DisplayDiv> */}
      <div>
      
        {/* <SignInForm onSubmit ={handleSignInSubmit}> */}
          <form onSubmit = {handleSignInSubmit}>
        <h3>Sign In</h3>
          <label>Username</label>
          <input value={signInState.userName} type="text" onInput ={e => setSignInState({
                    ...signInState,
                    "userName": e.target.value
                  }) } />



          <label>Password</label>
          <input value={signInState.password} type="password" onInput ={e => setSignInState({
                    ...signInState,
                    "password": e.target.value
                  }) }/>
          <input type="submit" value = "Submit"/>
        {/* </SignInForm> */}
        </form>

        {/* <VertLine></VertLine> */}

        
        {/* <SignUpForm onSubmit = {handleSignUpSubmit}> */}
        <form onSubmit = {handleSignUpSubmit}>
        <h3>Sign Up</h3>
          <label>Username</label>
          <input value = {signUpState.userName} type="text" onInput ={e => setSignUpState({
                    ...signUpState,
                    "userName": e.target.value
                  }) }/>
          <label>Password</label>
          <input value = {signUpState.password} type="password"  onInput ={e => setSignUpState({
                    ...signUpState,
                    "password": e.target.value
                  }) }/>
          <input type="submit" value="Submit" />
        {/* </SignUpForm> */}
        </form>
      {/* </DisplayDiv> */}
      </div>
  

        </>
    )
}

export default SignIn

// remember to IMPORT the exported component into a parent component. (App.js for example)