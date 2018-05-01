// Filter fish that are "on sale"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
  // space is for available container with fish class in children. if no space - id availabe with class fish on it
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  // stops at parent with class fish
  // console.log(fishCard);
  $('#snagged').append(fishCard);
};

const bindEvents = () => {
  $('button.add').click(moveToCart);
  $('#show-sale').click(() => {
    // click(filterFish);
    changeButtonText();
    filterFish();
    console.log('newjs');
  });
};

module.exports = bindEvents;
