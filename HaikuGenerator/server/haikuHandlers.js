const { forEach } = require("lodash");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const uri = process.env.MONGO_URI;

// createHaikuDB creates a document in MongoDb where the array of haiku verses will be stored.

const createHaikuDB = async (req, res) => {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const haikuDataBase = req.body;

  const haikuDataBaseName = haikuDataBase.haikuDataBaseName;

  console.log(haikuDataBaseName);

  try {
    await client.connect();
    const db = client.db("HAIKU-GENERATOR");
    const createDB = await db
      .collection("Haiku")
      .insertOne({ ...haikuDataBase });
    client.close();
    res.status(201).json({
      status: 201,
      _id: createDB.insertedId,
      haikuDataBase: haikuDataBase,
    });
  } catch (err) {
    res.status(500).json({
      data: haikuDataBase,
      message: "Something went wrong",
      err,
    });
  }
};

const getAllHaikus = async (req, res) => {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  try {
    await client.connect();
    const db = client.db("HAIKU-GENERATOR");
    const dataBaseArray = await db.collection("Haiku").find().toArray();

    const flattenedArray = [];
    const finalArray = [];
    dataBaseArray.forEach((haikuArray) => {
      haikuArray.haikuArray.forEach((array) => {
        flattenedArray.push(array);
      });
      flattenedArray.forEach((object) => {
        finalArray.push(Object.values(object));
      });
    });

    const flatfinalArray = finalArray.flat();
    var n = 3;
    function shuffle(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }
    array_tmp = flatfinalArray.slice(0);
    shuffle(array_tmp);
    console.log("3RANDOM", array_tmp.slice(0, n));

    const randomHaiku = array_tmp.slice(0, n);

    console.log("RANDOM", randomHaiku);
    console.log("FLAT", flatfinalArray);

    console.log("FINAL ARRAY", finalArray);

    console.log("FLATTENED", flattenedArray);

    res.status(201).json({
      status: 201,
      dataBaseArray: randomHaiku,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: dataBaseArray,
      message: "Something went wrong",
      err,
    });
  }
};

module.exports = {
  createHaikuDB,
  getAllHaikus,
};
