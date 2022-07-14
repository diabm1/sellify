const faker = require("faker");

const db = require("../config/connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  // create categories
  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Home Supplies" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  console.log('categories have been seeded')

  await Product.deleteMany();

  // create products
  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    }
  ])

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'David',
    lastName: 'Watson',
    email: 'a@b.c',
    password: 'pass1234',
    orders: [
      {
        products: [products[0]._id, products[0]._id]
      }
    ]
  });

  

  console.log("all done!");
  process.exit(0);
});
