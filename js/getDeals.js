$.ajax({
  type: 'GET',
  url: 'json/deal.json',
  dataType: 'json',
}).done(function(json) {
  for (let data of json) {
    let $deal = $('<div class="deal"></div>');
    $('.deals-container').append($deal);
    let $photo = $('<img />').attr("src", data['photoUrl']);
    $deal.append($('<div class="deal-photo"></div>').append($photo));
    $deal.append($('<div class="deal-title">' + data['title'].substr(0,46) + '</div>'));
    $deal.append($('<div class="deal-price">' + data['fixedPriceName'] + '<span>' + data['price'] + '円' + '</span>' + '</div>'));
  }
}).fail(function(json) {
  alert("DEALSのディールはローカルサーバを起動すると表示されます");
  document.(.deals-container).appendChild(document.createElement(".msg"));
});
