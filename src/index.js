const db = {};

// View all databases:
// show dbs; -> Lists all the available databases;
// use ${database_name}; -> Uses the specified database. If db does not exist, it creates the new db with the specified name.

// List of restaurants
// Read the docs to find new queries - google / stackoverlow.....
// 1. Write a MongoDB query to display all the documents in the collection restaurants.
// 2. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
// 3. Write a MongoDB query to find the restaurants who achieved a score more than 20.
// 4. Write a MongoDB query to find the restaurants that achieved a score, more than 20 but less than 30.
// 5. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
// 6. Write a MongoDB query to arrange the name of the restaurants in descending order along with all the columns.


/*
1. db.list.find().pretty()
2. db.list.find({borough: 'Bronx'}, {borough: 1, address: {building: 1}}).pretty()
3. db.list.find({grades : { $elemMatch:{"score":{$gt : 20}}}}, {name: 1, grades: 1}).pretty()
4. db.list.find({grades : { $elemMatch:{"score":{$gt : 20, $lt: 30}}}}, {name: 1, grades: 1}).pretty()
5. db.list.find({}, {name: 1}).sort({name: 1})
6. db.list.find({}, {name: 1}).sort({name: -1})
*/


const list = [
  {
    address: {
      building: "1007",
      coord: [-73.856077, 40.848447],
      street: "Morris Park Ave",
      zipcode: "10462"
    },
    borough: "Bronx",
    cuisine: "Bakery",
    grades: [de
      { date: { $date: 1393804800000 }, grade: "A", score: 2 },
      { date: { $date: 1378857600000 }, grade: "A", score: 6 },
      { date: { $date: 1358985600000 }, grade: "A", score: 10 },
      { date: { $date: 1322006400000 }, grade: "A", score: 9 },
      { date: { $date: 1299715200000 }, grade: "B", score: 14 }
    ],
    name: "Morris Park Bake Shop",
    restaurant_id: "30075445"
  },
  {
    address: {
      building: "469",
      coord: [-73.961704, 40.662942],
      street: "Flatbush Avenue",
      zipcode: "11225"
    },
    borough: "Brooklyn",
    cuisine: "Hamburgers",
    grades: [
      { date: { $date: 1419897600000 }, grade: "A", score: 8 },
      { date: { $date: 1404172800000 }, grade: "B", score: 23 },
      { date: { $date: 1367280000000 }, grade: "A", score: 12 },
      { date: { $date: 1336435200000 }, grade: "A", score: 12 }
    ],
    name: "Wendy'S",
    restaurant_id: "30112340"
  },
  {
    address: {
      building: "351",
      coord: [-73.98513559999999, 40.7676919],
      street: "West   57 Street",
      zipcode: "10019"
    },
    borough: "Manhattan",
    cuisine: "Irish",
    grades: [
      { date: { $date: 1409961600000 }, grade: "A", score: 2 },
      { date: { $date: 1374451200000 }, grade: "A", score: 11 },
      { date: { $date: 1343692800000 }, grade: "A", score: 12 },
      { date: { $date: 1325116800000 }, grade: "A", score: 12 }
    ],
    name: "Dj Reynolds Pub And Restaurant",
    restaurant_id: "30191841"
  },
  {
    address: {
      building: "2780",
      coord: [-73.98241999999999, 40.579505],
      street: "Stillwell Avenue",
      zipcode: "11224"
    },
    borough: "Brooklyn",
    cuisine: "American ",
    grades: [
      { date: { $date: 1402358400000 }, grade: "A", score: 5 },
      { date: { $date: 1370390400000 }, grade: "A", score: 7 },
      { date: { $date: 1334275200000 }, grade: "A", score: 12 },
      { date: { $date: 1318377600000 }, grade: "A", score: 12 }
    ],
    name: "Riviera Caterer",
    restaurant_id: "40356018"
  },
  {
    address: {
      building: "97-22",
      coord: [-73.8601152, 40.7311739],
      street: "63 Road",
      zipcode: "11374"
    },
    borough: "Queens",
    cuisine: "Jewish/Kosher",
    grades: [
      { date: { $date: 1416787200000 }, grade: "Z", score: 20 },
      { date: { $date: 1358380800000 }, grade: "A", score: 13 },
      { date: { $date: 1343865600000 }, grade: "A", score: 13 },
      { date: { $date: 1323907200000 }, grade: "B", score: 25 }
    ],
    name: "Tov Kosher Kitchen",
    restaurant_id: "40356068"
  },
  {
    address: {
      building: "8825",
      coord: [-73.8803827, 40.7643124],
      street: "Astoria Boulevard",
      zipcode: "11369"
    },
    borough: "Queens",
    cuisine: "American ",
    grades: [
      { date: { $date: 1416009600000 }, grade: "Z", score: 38 },
      { date: { $date: 1398988800000 }, grade: "A", score: 10 },
      { date: { $date: 1362182400000 }, grade: "A", score: 7 },
      { date: { $date: 1328832000000 }, grade: "A", score: 13 }
    ],
    name: "Brunos On The Boulevard",
    restaurant_id: "40356151"
  },
  {
    address: {
      building: "2206",
      coord: [-74.1377286, 40.6119572],
      street: "Victory Boulevard",
      zipcode: "10314"
    },
    borough: "Staten Island",
    cuisine: "Jewish/Kosher",
    grades: [
      { date: { $date: 1412553600000 }, grade: "A", score: 9 },
      { date: { $date: 1400544000000 }, grade: "A", score: 12 },
      { date: { $date: 1365033600000 }, grade: "A", score: 12 },
      { date: { $date: 1327363200000 }, grade: "A", score: 9 }
    ],
    name: "Kosher Island",
    restaurant_id: "40356442"
  },
  {
    address: {
      building: "7114",
      coord: [-73.9068506, 40.6199034],
      street: "Avenue U",
      zipcode: "11234"
    },
    borough: "Brooklyn",
    cuisine: "Delicatessen",
    grades: [
      { date: { $date: 1401321600000 }, grade: "A", score: 10 },
      { date: { $date: 1389657600000 }, grade: "A", score: 10 },
      { date: { $date: 1375488000000 }, grade: "A", score: 8 },
      { date: { $date: 1342569600000 }, grade: "A", score: 10 },
      { date: { $date: 1331251200000 }, grade: "A", score: 13 },
      { date: { $date: 1318550400000 }, grade: "A", score: 9 }
    ],
    name: "Wilken'S Fine Food",
    restaurant_id: "40356483"
  },
  {
    address: {
      building: "6409",
      coord: [-74.00528899999999, 40.628886],
      street: "11 Avenue",
      zipcode: "11219"
    },
    borough: "Brooklyn",
    cuisine: "American ",
    grades: [
      { date: { $date: 1405641600000 }, grade: "A", score: 12 },
      { date: { $date: 1375142400000 }, grade: "A", score: 12 },
      { date: { $date: 1360713600000 }, grade: "A", score: 11 },
      { date: { $date: 1345075200000 }, grade: "A", score: 2 },
      { date: { $date: 1313539200000 }, grade: "A", score: 11 }
    ],
    name: "Regina Caterers",
    restaurant_id: "40356649"
  },
  {
    address: {
      building: "1839",
      coord: [-73.9482609, 40.6408271],
      street: "Nostrand Avenue",
      zipcode: "11226"
    },
    borough: "Brooklyn",
    cuisine: "Ice Cream, Gelato, Yogurt, Ices",
    grades: [
      { date: { $date: 1405296000000 }, grade: "A", score: 12 },
      { date: { $date: 1373414400000 }, grade: "A", score: 8 },
      { date: { $date: 1341964800000 }, grade: "A", score: 5 },
      { date: { $date: 1329955200000 }, grade: "A", score: 8 }
    ],
    name: "Taste The Tropics Ice Cream",
    restaurant_id: "40356731"
  }
];

// Insert into moviesList collection
db.moviesList.insert([
  {
    id: "299537",
    title: "Captain Marvel",
    poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    overview:
      "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    release_date: 1551830400,
    genres: ["Action", "Adventure", "Science Fiction"]
  },
  {
    id: "522681",
    title: "Escape Room",
    poster: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
    overview:
      "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
    release_date: 1546473600,
    genres: ["Thriller", "Action", "Horror", "Science Fiction"]
  },
  {
    id: "166428",
    title: "How to Train Your Dragon: The Hidden World",
    poster: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    overview:
      "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    release_date: 1546473600,
    genres: ["Animation", "Family", "Adventure"]
  }
]);

// Query -> Read Data
// SQL equivalent query - SELECT * FROM moviesList
db.moviesList.find(); // -> Returns all the movies from the moviesList collection

db.moviesList.find().pretty(); // -> Formats the result in shell.

db.moviesList.find({ title: "How to Train Your Dragon: The Hidden World" });
// returns
// {
//     "_id": Objectid(asdfasdfasdfas),
//     id: "166428",
//     title: "How to Train Your Dragon: The Hidden World",
//     poster: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
//     overview:
//       "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
//     release_date: 1546473600,
//     genres: ["Animation", "Family", "Adventure"],
//   }

// [{movie}, {movie}, {movie}]
db.moviesList.find({ genres: { $in: ["Action", "Adventure", "Family"] } }); // $in -> OR operator

// Update data
db.moviesList.update(
  { title: "How to Train Your Dragon: The Hidden World" },
  { $set: { title: "How to Train Your Dragon 1" } }
);

// Use db.collectionName.save -> if not matched -> inserts a new document.
db.moviesList.save(
  { title: "How to Train Your Dragon 1" },
  { name: "my movie" }
);

// Replace the document containing that id and replace everything with the stuff provided.
db.moviesList.save({
  _id: ObjectId("60b599ff8b75b296c3824946"),
  name: "my movie"
});

// Drop a collection
db.collectionName.drop(); // Deletes the collection

// Remove a document
db.moviesList.remove({ _id: ObjectId("60b599ff8b75b296c3824946") });

db.moviesList.remove({ genres: { $in: ["Action", "Adventure"] } });
