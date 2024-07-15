const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://dineease-5bb20.web.app",
      "https://dineease-5bb20.firebaseapp.com",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// verify jwt middlewar
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).send({ message: "Unauthorized Access" });
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(403).send({ message: "Unauthorized Access" });
      }
      console.log(decoded);
      req.user = decoded;
      next();
    });
  }
  console.log(token);
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.88u2plt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const foodsCollection = client.db("dineease").collection("foods");
    const purchaseCollection = client.db("dineease").collection("purchase");
    const galleryCollection = client.db("dineease").collection("gallery");

    // jwt generate
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // clear token on logout
    app.get("/logout", async (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          maxAge: 0,
        })
        .send({ success: true });
    });

    // Get all foods from db
    app.get("/foods", async (req, res) => {
      const result = await foodsCollection.find().toArray();
      res.send(result);
    });

    // Get all gallery from db
    app.get("/gallery", async (req, res) => {
      const result = await galleryCollection.find().toArray();
      res.send(result);
    });

    // Get a single food data from db
    app.get("/food/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodsCollection.findOne(query);
      res.send(result);
    });

    //Get all foods data for search
    app.get("/allFoods", async (req, res) => {
      const search = req.query.search;

      let query = {
        food_title: { $regex: search, $options: "i" },
      };
      // if(filter) query.category = filter
      let options = {};
      const result = await foodsCollection.find(query).toArray();
      res.send(result);
    });

    // Add a food in db
    app.post("/foods", async (req, res) => {
      const foodData = req.body;
      const result = await foodsCollection.insertOne(foodData);
      res.send(result);
    });

    // Add a item in gallery db
    app.post("/gallery", async (req, res) => {
      const saveData = req.body;
      const result = await galleryCollection.insertOne(saveData);
      res.send(result);
    });

    // save a data in purchase db
    app.post("/purchase", async (req, res) => {
      const purchaseData = req.body;
      const result = await purchaseCollection.insertOne(purchaseData);
      res.send(result);
    });

    // Get all foods added by a specific user
    app.get("foods/:email", verifyToken, async (req, res) => {
      // const token = req.cookies?.token;
      // if(token) {
      //   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
      //     if(err){
      //       return console.log(err);
      //     }
      //     console.log(decoded);
      //   })
      // }
      const tokenEmail = req.user.email;
      if (tokenEmail !== email) {
        return res.status(403).send({ message: "Forbidden Access" });
      }
      const email = req.params.email;
      const query = { "admin.email": email };
      const result = await foodsCollection.find(query).toArray();
      res.send(result);
    });

    // Update a food item in db
    app.put("/foods/:id", async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateData,
        },
      };
      const result = await foodsCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    // Get all purchase from db
    app.get("/purchase", async (req, res) => {
      const result = await purchaseCollection.find().toArray();
      res.send(result);
    });

    // save a purchase in db
    app.post("/purchase", async (req, res) => {
      const purchaseData = req.body;
      const result = await purchaseCollection.insertOne(purchaseData);

      //update purchase count
      const updateDoc = {
        $set: { $inc: { purchase_count: 1 } },
      };
      const foodQuery = { _id: new ObjectId(purchaseData.foodId) };
      const updatePurchaseCount = await foodsCollection.updateOne(
        foodQuery,
        updateDoc
      );
      res.send(result);
    });

    //Get purchase from a specific user
    app.get("/purchase/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await purchaseCollection.find(query).toArray();
      res.send(result);
    });

    //Delete an item from purchase collection
    app.delete("/purchase/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await purchaseCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Dine Ease is ready and running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
