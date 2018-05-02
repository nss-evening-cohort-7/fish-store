const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
};

const whenFishesDontLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
