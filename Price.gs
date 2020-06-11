/**
 * [Telderi] Get `current price` in RUB.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Current price
 * @customfunction
 */
function Telderi_currentPrice(url) {
  return Utils.extractInt(Utils.html(url), '#now_price');
}

/**
 * [Telderi] Get `optimal price` in RUB.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Optimal price
 * @customfunction
 */
function Telderi_optimalPrice(url) {
  return Utils.extractInt(Utils.html(url), '#start_price span.price_padd');
}

/**
 * [Telderi] Get `blitz price` in RUB.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Blitz price
 * @customfunction
 */
function Telderi_blitzPrice(url) {
  return Utils.extractInt(Utils.html(url), '#blitz_price span.price_padd');
}
