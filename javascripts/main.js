// Filter fish that are "on sale"

// Add fish to "Basket"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
}

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    console.log(text);
   if (text === "Show Sale Fish") {
    returnText = "Show All"
   } else {
     returnText = "Show Sale Fish"
   }
   return returnText;
  })
}

$('#show-sale').click(() => {
  changeButtonText();
  filterFish();
})

const moveToCard = (e) => {
  let fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
}

$('button.add').click(moveToCard);