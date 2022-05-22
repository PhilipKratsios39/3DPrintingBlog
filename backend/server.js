// here we write endpoints

//the endpoints (also called an API) are funtions that go get stuff from databases like MongoDB or from servers on the internet 
//for example our smartphones call servers on the internet to give us the weather for the week

//Every api request for stuff that is sent contains information about the request and a response that contains response information
// The front end uses the response info to display it on the web page


"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {getUsers,getOneUser,newUser,getAllPosts,getOnePost,newPost,editPost,deletePost,getAllComments,getOneComment,newComment, editComment, deleteComment, getPostComments } = require("./serverFuntions")

const PORT = 8000

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //User Collection
 .get("/getUsers", getUsers )
 .get('/getUser/:userName', getOneUser)
  .post("/newUser", newUser)

  //Post Collection
   .get("/getPosts", getAllPosts)
   .get("/getPost/:_id", getOnePost)
  .post("/newPost", newPost)
  .put("/updatePost/:_id", editPost)
  .delete("/deletePost/:_id", deletePost)

  //Comments Collection
 .get("/getComments", getAllComments)
 .get("/getCommentsByPostId/:_id", getPostComments)
   .get("/getComment/:_id", getOneComment)
  .post("/newComment", newComment)
   .put("/updateComment/:_id", editComment)
  .delete("/deleteComment/:_id", deleteComment)

.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

.listen(PORT, () => console.log(`Listening on port ${PORT}`));



