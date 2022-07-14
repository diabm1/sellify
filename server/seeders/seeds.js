const faker = require("faker");

const db = require("../config/connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany({});

  // create categories
  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Home Supplies" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  console.log('categories have been seeded')

  

  console.log("all done!");
  process.exit(0);
});
