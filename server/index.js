
const cors = require('cors')
const express = require('express')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// database connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.DB_URL;

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

    // create a collection of books
    const bookCollections = client.db('BookInventory').collection('books')

    // insert a book to the database
    app.post('/upload-book', async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    })

    // get all books from the database
    /* app.get('/all-books', async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    }) */

    // update a book data
    app.patch('/book/:id', async (req, res) => {
      const id = req.params.id;
      const updatedBookData = req.body;
      const filter = { _id: new ObjectId(id) }
      const updatedDoc = {
        $set: {
          ...updatedBookData
        },
      }
      const options = { upsert: true }

      // update logic
      const result = await bookCollections.updateOne(filter, updatedDoc, options)
      res.send(result);
    })

    // delete a book from the database
    app.delete('/book/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await bookCollections.deleteOne(filter)
      res.send(result);
    })

    // to find book by category
    app.get('/all-books', async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = {category: req.query.category}
      }

      const result = await bookCollections.find(query).toArray();
      res.send(result)
    })

    // to find a single book
    app.get('/book/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})