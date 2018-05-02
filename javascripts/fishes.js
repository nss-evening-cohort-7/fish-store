const loadFishes = (successFunction, errorFunction) => {
  $.get('../db/fishes.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = loadFishes;
