// Filter fish that are "on sale"

// Add fish to "Basket"
const moveToCart = (e) => {
  let fishCard = $(e.target).closest('.fish'); //stops at parent with class fish
  // console.log(fishCard);
  $('#snagged').append(fishCard);
};

$('button.add').click(moveToCart);