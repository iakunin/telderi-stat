/**
 * [Telderi] Get `revenue from context ad` in percents.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Revenue from context ad in percents.
 * @customfunction
 */
function Telderi_revenueFromContext_percents(url) {
  return revenue(url, 'Контекстная реклама');
}

/**
 * [Telderi] Get `revenue from CPA` in percents.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Revenue from CPA in percents.
 * @customfunction
 */
function Telderi_revenueFromCpa_percents(url) {
  return revenue(url, 'CPA (партнерские программы)');
}



function revenue(url, type) {
  const $ = Cheerio.load(html(url));
  const selector = "div:contains('" + type + "')";

  return $('#revenue')
    .parent()
    .find(selector)
    .last()
    .parent()
    .find('.data-part')
    .map((i, el) => $(el).text())
    .get()
    .map(i => i.trim().split('/')[1].trim())
    .map(i => parseInt(i) || 0)
    .reduce((a,b) => a + b, 0);
}
