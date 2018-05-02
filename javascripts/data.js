const loadFishes = require('./fishes');

const whenFishesLoad = (data) => {
  console.log('data', data);
};

const whenFishesDontLoad = () => {
  console.error('error!');
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
