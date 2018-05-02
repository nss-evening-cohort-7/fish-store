const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');
const applySale = require('./discount');

const whenFishesLoad = (data) => {
  // console.log('data', data);
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
  applySale();
};

const whenFishesDontLoad = () => {
  console.error('error!');
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
