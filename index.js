const express = require('express');
const database = require('./models');
const server = express();
const cors = require('cors');
const bearerToken = require('express-bearer-token');

server.use(express.json());
server.use(cors());
server.use(bearerToken());
server.use('/', (req, res) => {
  res.status(200).send('test');
});

server.listen(process.env.SERVER_PORT, () => {
  console.log('connected');
});

// const user = database.user;
// const transaction = database.transaction;
// const tenant = database.tenant;
// const property = database.property;
// const payment = database.payment;
// const room = database.room;
// const review = database.review;
// const category = database.category;
// const facility = database.facility;
// const highSeason = database.highSeason;
// const propertyfacility = database.propertyFacility;
// property.sync({ alter: true });
// highSeason.sync({ alter: true });
// review.sync({ alter: true });
// payment.sync({ alter: true });
// propertyfacility.sync({ alter: true });
// room.sync({ alter: true });
// transaction.sync({ alter: true });
// category.sync({ alter: true });
// facility.sync({ alter: true });
// user.sync({ alter: true });
// tenant.sync({ alter: true });
// tenant.create({
//   userId: 1,
//   KTPPhoto: 'picture.jpg',
//   KTPDetail: 'detail',
// });
