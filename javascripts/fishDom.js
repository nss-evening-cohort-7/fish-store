const writeFishes = (fishes) => {
  let domstring = '';
  fishes.forEach((fish) => {
    domstring += `<div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">`;
    domstring +=   `<div class="thumbnail">`;
    domstring +=     `<img src="${fish.imageSoure}" alt="" width="40%">`;
    domstring +=   `<div class="caption">`;
    domstring +=      `<h3 id="thumbnail-label">${fish.name}</h3>`;
    domstring +=       `<p>$`;
    domstring +=         `<span class="price">${fish.basePrice}</span>`;
    domstring +=       `</p>`;
    domstring +=    `</div>`;
    domstring +=    `<div class="caption card-footer">`;
    domstring +=      `<button class="add btn btn-danger">Add To Basket</button>`;
    domstring +=   `</div>`;
    domstring +=   `</div>`;
    domstring += `</div>`;
  });
  return domstring;
};

module.exports = writeFishes;
