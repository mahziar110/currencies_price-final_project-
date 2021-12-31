const http = new XMLHttpRequest();
const url = 'https://run.mocky.io/v3/7c0bff9d-6d74-4c89-9726-15ecc8614a27';

function set_prices(currency_id) {
    document.getElementById(`${currency_id}_toman`).innerHTML = prices[currency_id].value;
    document.getElementById(`${currency_id}_dollar`).innerHTML = prices[currency_id].value * dollar_price;
}

http.open('GET', url);
http.send();
http.onreadystatechange = (e) => {
    var prices = JSON.parse(http.responseText);
    console.log(prices);

    const dollar_price = prices.usd.value;
    console.log(dollar_price);

    function set_prices(currency_id) {
        document.getElementById(`${currency_id}_toman`).innerHTML = prices[currency_id].value;
        if (prices[currency_id].value / dollar_price > 1) 
            document.getElementById(`${currency_id}_dollar`).innerHTML = Math.floor(prices[currency_id].value / dollar_price);
        else
            document.getElementById(`${currency_id}_dollar`).innerHTML = (prices[currency_id].value / dollar_price).toFixed(2);
    }

    

    // set btc price
    set_prices('btc');
    set_prices('eth');
    set_prices('usdt');
    set_prices('usd_doge');
    set_prices('ltc');
    set_prices('bnb');

}