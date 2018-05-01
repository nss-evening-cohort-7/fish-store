// Filter fish that are "on sale"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === "Show Sale Fish") {
      returnText = "Show All";
    } else {
      returnText = "Show Sale Fish";
    }
    return returnText;
  })
};

$('#show-sale').click(() => { //click(filterFish);
  changeButtonText();
  filterFish();
});
// Add fish to "Basket"
const moveToCart = (e) => {
  let fishCard = $(e.target).closest('.fish'); //stops at parent with class fish
  // console.log(fishCard);
  $('#snagged').append(fishCard);
};

$('button.add').click(moveToCart);


