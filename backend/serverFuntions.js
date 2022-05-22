// User Collection
// Create.Read.Update.Delete
//getUser  -- CRUD -- read -- method: get
//newUser  -- Create -- method: post


//User Posts collection
//getPosts -- read -- method: get
//getOnePost
//newPost -- create -- post
//editPost -- update -- method: put
//deletePost -- delete -- mehod: delete


//Comments Collection
//getCommetns
//getOneComment
//newComment
//editComment
//deleteComment

const MONGO_URI = "mongodb://localhost:27017"

const { MongoClient, ObjectId } = require("mongodb");
const assert = require("assert");

//require("dotenv").config();
//const { MONGO_URI } = process.env;



const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "3dPrintBlog"

// const funtionTemplate = async (req, res) => {
//     // creates a new client
//     const client = new MongoClient(MONGO_URI, options);
  
//     // connect to the client
//     await client.connect();
  
//     // connect to the database (db name is provided as an argument to the function)
//     const db = client.db(dbName);
//     console.log("connected!");
 
    //Database Operation Start

    //Database Operation End
  
//     // close the connection to the database server
//     client.close();
//     console.log("disconnected!");
//   };
//------------------------------------------------

  const getUsers = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
  
    // connect to the client
    await client.connect();
  
    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");
  
//Database Operation Start

    const results =  await db.collection("users").find().toArray();

    res.status(200).json(results)

//Database Operation End

    // close the connection to the database server
    client.close();
    console.log("disconnected!");
  };

//------------------------------------------------


  const newUser = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
  
    // connect to the client
    await client.connect();
  
    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");
  
    //Database Operation Start

    try {
          const result = await db.collection("users").insertOne(req.body);
          res.status(201).json({ status: 201, data: req.body });
          client.close()
      }
    catch (err) {
            res.status(500).json({ status: 500, data: req.body, message: err.message });
            console.log(err.stack);
            client.close();
            console.log("disconnected!");
        }

    //Database Operation End

    // close the connection to the database server
    client.close();
    console.log("disconnected!");
  };
//------------------------------------------------

const getOneUser = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
  
    // connect to the client
    await client.connect();
  
    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");
 
    //Database Operation Start
    const userName = String(req.params.userName)
  
   
    try {
      // const results =  await db.collection("users").findOne({"_id": new ObjectId(_id)})
      const results =  await db.collection("users").findOne({userName})

      res.status(200).json(results)
      client.close()
  }
catch (err) {
        res.status(500).json({ status: 500, notFound: _id, message: err.message });
        console.log(err.stack);
        client.close();
        console.log("disconnected!");
    }
   


   // Database Operation End
  
    // close the connection to the database server
    client.close();
    console.log("disconnected!");
  };

//------------------------------------------------
const newPost = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
  
    // connect to the client
    await client.connect();
  
    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");
 
    //Database Operation Start
    try {
      const result = await db.collection("post").insertOne(req.body);
      res.status(201).json({ status: 201, data: req.body });
      client.close()
  }
catch (err) {
        res.status(500).json({ status: 500, data: req.body, message: err.message });
        console.log(err.stack);
        client.close();
        console.log("disconnected!");
    }
    //Database Operation End
  
    // close the connection to the database server
    client.close();
    console.log("disconnected!");
  };
//------------------------------------------------

 
const getAllPosts = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  const results =  await db.collection("post").find().toArray();

  res.status(200).json(results)
  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};
//------------------------------------------------
const getOnePost = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  const _id = String(req.params._id)
  console.log(_id, "id")
 
  try {
    const results =  await db.collection("post").findOne({"_id": new ObjectId(_id)})

    res.status(200).json(results)
    client.close()
}
catch (err) {
      res.status(500).json({ status: 500, notFound: _id, message: err.message });
      console.log(err.stack);
      client.close();
      console.log("disconnected!");
  }
  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};
//------------------------------------------------
const editPost = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  try {
    let _id = String(req.params._id)
    const query = { "_id": new ObjectId(_id)};
          const newValues = { $set: { ...req.body } };
          const result = await db.collection("post").updateOne(query, newValues );
          res.status(201).json({ status: 201, data: result });
          client.close()
          console.log("disconnected!");
  } catch (err) {
    res.status(500).json({ status: 500, notFound: _id, message: err.message });
    console.log(err.stack);
    client.close();
    console.log("disconnected!");
  }

  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};
//------------------------------------------------
const deletePost = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  const _id = String(req.params._id)
  console.log(_id, "id")
 
  try {
    const results =  await db.collection("post").deleteOne({"_id": new ObjectId(_id)})

    res.status(200).json(results)
    client.close()
}
catch (err) {
      res.status(500).json({ status: 500, notFound: _id, message: err.message });
      console.log(err.stack);
      client.close();
      console.log("disconnected!");
  }
  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

//------------------------------------------------
const getAllComments = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  const results =  await db.collection("comments").find().toArray();

  res.status(200).json(results)
  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};
//------------------------------------------------
const getOneComment = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  const _id = String(req.params._id)
  console.log(_id, "id")
 
  try {
    const results =  await db.collection("comments").findOne({"_id": new ObjectId(_id)})

    res.status(200).json(results)
    client.close()
}
catch (err) {
      res.status(500).json({ status: 500, notFound: _id, message: err.message });
      console.log(err.stack);
      client.close();
      console.log("disconnected!");
  }
  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

//------------------------------------------------
const newComment = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  try {
    const result = await db.collection("comments").insertOne(req.body);
    res.status(201).json({ status: 201, data: req.body });
    client.close()
}
catch (err) {
      res.status(500).json({ status: 500, data: req.body, message: err.message });
      console.log(err.stack);
      client.close();
      console.log("disconnected!");
  }
  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

//------------------------------------------------

const deleteComment = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("connected!");

  //Database Operation Start
  const _id = String(req.params._id)
  console.log(_id, "id")
 
  try {
    const results =  await db.collection("comments").deleteOne({"_id": new ObjectId(_id)})

    res.status(200).json(results)
    client.close()
}
catch (err) {
      res.status(500).json({ status: 500, notFound: _id, message: err.message });
      console.log(err.stack);
      client.close();
      console.log("disconnected!");
  }
  //Database Operation End

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

//------------------------------------------------

const editComment = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
  
    // connect to the client
    await client.connect();
  
    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");
 
    //Database Operation Start
    try {
      let _id = String(req.params._id)
      const query = { "_id": new ObjectId(_id)};
            const newValues = { $set: { ...req.body } };
            const result = await db.collection("comments").updateOne(query, newValues );
            res.status(201).json({ status: 201, data: result });
            client.close()
            console.log("disconnected!");
    } catch (err) {
      res.status(500).json({ status: 500, notFound: _id, message: err.message });
      console.log(err.stack);
      client.close();
      console.log("disconnected!");
    }
   // Database Operation End
  
    // close the connection to the database server
    client.close();
    console.log("disconnected!");
  };
//------------------------------------------------
  const getPostComments = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
  
    // connect to the client
    await client.connect();
  
    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");
 
    //Database Operation Start
    const _id = String(req.params._id)
    const results =  await db.collection("comments").find({"postId": _id}).toArray();

    res.status(200).json(results)
    //Database Operation End
  
    // close the connection to the database server
    client.close();
    console.log("disconnected!");
  };
//------------------------------------------------


  module.exports = { getUsers, newUser, getOneUser, newPost,getAllPosts,getOnePost,editPost,deletePost,getAllComments,getOneComment, getPostComments, newComment, editComment, deleteComment }