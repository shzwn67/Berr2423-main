const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bcrypt = require('bcrypt');

app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://b022210091:Ew%40nx45%23@cluster0.d52rwim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);




app.post('/user', async(req, res) => 
{
   // console.log(req.body)

  const hash = bcrypt.hashSync(req.body.password, 10);

   let result = await client.db('sample_mflix').collection('users').insertOne(
      {
         username: req.body.username,
         password: hash,
         name: req.body.name,
         email: req.body.email
      }
   )
   res.send(result)
})

app.post('/login', async(req, res) =>{

  //username:req.body.username
  //password:req.body.password

  //step 1: check if username exist
  let result = await client.db('sample_mflix').collection('users').findOne(
    {
     username: req.body.username
    })

  if(!result){
    res.send('username not found')
  }
  else{
    //step2: check if password is correct
    //result.password = req.body.password

  if(bcrypt.compareSync(req.body.password, result.password)==true){
    res.send("login successfully")
  }
  else{
    res.send("Wrong password")
  }
}
console.log(result)
})

// get user profile
app.get('/user/:siapadia/:emaildia', async (req, res) => {
   // findOne
   let result = await client.db('sample_mflix').collection('users').findOne({
     username: req.params.siapadia,
     email: req.params.emaildia
   })
   res.send(result)
 })
 
 // update user account
 app.patch('/user', (req, res) => {
   // updateOne
   console.log('update user profile')
 })
 
 // delete user account
 app.delete('/user', (req, res) => {
   // deleteOne
   console.log('delete user account')
 })
 

app.get('/items', async (req, res) => {
  try {
      const items = await Item.find();
      res.json(items);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// POST request - Create a new item
app.post('/items', async (req, res) => {
  const item = new Item({
      name: req.body.name,
      description: req.body.description,
  });
  try {
      const newItem = await item.save();
      res.status(201).json(newItem);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// PATCH request - Update an item
app.patch('/items/:id', async (req, res) => {
  try {
      const item = await Item.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });

      if (req.body.name != null) {
          item.name = req.body.name;
      }
      if (req.body.description != null) {
          item.description = req.body.description;
      }

      const updatedItem = await item.save();
      res.json(updatedItem);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
      const item = await Item.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });

      await item.remove();
      res.json({ message: 'Item deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});