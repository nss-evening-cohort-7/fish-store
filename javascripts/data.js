const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
};

const whenFishesFail = (error) => {
  console.log('error', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesFail);
};

module.exports = initializer;
