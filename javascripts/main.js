// Filter fish that are "on sale"

// Add fish to "Basket"
const moveToCard = (e) => {
  let fishCard = $(e.target).closest('.fish');
  console.log('fishCard', fishCard);
  $('#snugged').append('fishCard);
}

$('button.add').click(moveToCard);