// Filter fish that are "on sale"

// Add fish to "Basket"
const moveToCart = (e) => {
  let fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
}

$('button.add').click(moveToCart);