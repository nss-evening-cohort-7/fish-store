const discount = 0.2;

const applySale = () => {
  $('.on-sale').each((i, fishCard) => {
    const basePriceElement = $(fishCard).find('.price');
    const basePrice = basePriceElement.html() * 1;
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    basePriceElement.html(newPrice);
  });
};

module.exports = applySale;
