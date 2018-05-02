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
  console.log('movetocart');
  // console.log(fishCard);
  $('#snagged').append(fishCard);
  $(e.target).text('Remove from Cart').removeClass('add btn-danger').addClass('remove btn-info');
  // $('e.target').on('click', removeFromCart);
};

const removeFromCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#available').append(fishCard);
  // $('e.target').text('Add to Cart');
  $(e.target).text('Add to Cart').removeClass('remove btn-info').addClass('add btn-danger');

  // $('e.target').on('click', moveToCart);
};

const bindEvents = () => {
  $('body').on('click', '.remove', removeFromCart);
  $('body').on('click', '.add', moveToCart);
  // $('button.add').on('click', moveToCart);
  $('#show-sale').click(() => {
    // click(filterFish);
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;
