/**
 * [Telderi] Get `current price` in RUB.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Current lot price.
 * @customfunction
 */
function Telderi_currentPrice(url) {
    return Utils.extractInt(url, '#now_price');
}

/**
 * [Telderi] Get `optimal price` in RUB.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Optimal lot price.
 * @customfunction
 */
function Telderi_optimalPrice(url) {
    return Utils.extractInt(url, '#start_price span.price_padd');
}

/**
 * [Telderi] Get `blitz price` in RUB.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Blitz lot price.
 * @customfunction
 */
function Telderi_blitzPrice(url) {
    return Utils.extractInt(url, '#blitz_price span.price_padd');
}
