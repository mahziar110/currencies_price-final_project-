const http = new XMLHttpRequest();

const url = "http://api.navasan.tech/latest/?api_key=freetXbqbSTJQnw2s0vMKZmGimmZPdq6"

function set_prices(currency_id) {
    document.getElementById(`${currency_id}_toman`).innerHTML = prices[currency_id].value;
    document.getElementById(`${currency_id}_dollar`).innerHTML = prices[currency_id].value * dollar_price;
}

http.open('GET', url);
http.send();
http.onreadystatechange = (e) => {
    var prices = JSON.parse(http.responseText);

    const dollar_price = prices.usd.value;

    function set_prices(currency_id) {
        const toman_field = document.getElementById(`${currency_id}_toman`);
        const dollar_field = document.getElementById(`${currency_id}_dollar`);

        toman_field.innerHTML = prices[currency_id].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        let crypto_currency_usd;

        if (prices[currency_id].value / dollar_price > 1) 
            crypto_currency_usd = Math.floor(prices[currency_id].value / dollar_price);
        else
            crypto_currency_usd = (prices[currency_id].value / dollar_price).toFixed(2);
        if (dollar_field !== null)
            dollar_field.innerHTML = crypto_currency_usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // set cryptos prices
    set_prices('btc');
    set_prices('eth');
    set_prices('usdt');
    set_prices('usd_doge');
    set_prices('ltc');
    set_prices('bnb');

    // set world currencies prices
    set_prices('usd');
    set_prices('eur');
    set_prices('try');
    set_prices('rub');
}