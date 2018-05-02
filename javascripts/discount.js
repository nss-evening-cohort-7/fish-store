const discount = 0.2;

const applySale = () => {
  $('.on-sale').each((i, fishCard) => {
    const basePriceElem = $(fishCard).find('.price');
    // console.log('basePriceElem', basePriceElem.html());
    const basePrice = basePriceElem.html() * 1;
    // console.log('basePrice', basePrice);
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    basePriceElem.html(newPrice);
  });
};

module.exports = applySale;
