/**
 * [Telderi] Get `traffic from Yandex` in percents.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Traffic from Yandex` in percents
 * @customfunction
 */
function Telderi_trafficFromYandex_percents(url) {
  return extractTrafficPercents(html(url), 'яндекс') + 
    extractTrafficPercents(html(url), 'yandex') + 
    extractTrafficPercents(html(url), 'yandex.ru');
}

/**
 * [Telderi] Get `traffic from Google` in percents.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Traffic from Google` in percents
 * @customfunction
 */
function Telderi_trafficFromGoogle_percents(url) {
  return extractTrafficPercents(html(url), 'google');
}


function extractTrafficPercents(html, sourceName) {
  const $ = Cheerio.load(html);
  const selector = "#seo_block [title='" + sourceName + "']";
  
  return parseInt(
    $(selector).parent().children('.data-part').text().trim().split('/')[0]
  ) || 0;
}
