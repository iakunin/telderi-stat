/**
 * [Telderi] Get `traffic from Yandex` in percents.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Traffic from Yandex in percents (from 0 to 100).
 * @customfunction
 */
function Telderi_trafficFromYandex_percents(url) {
  return Traffic.percents(url, 'яндекс') +
    Traffic.percents(url, 'yandex') +
    Traffic.percents(url, 'yandex.ru');
}

/**
 * [Telderi] Get `traffic from Google` in percents.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Traffic from Google` in percents (from 0 to 100).
 * @customfunction
 */
function Telderi_trafficFromGoogle_percents(url) {
  return Traffic.percents(url, 'google');
}

class Traffic {
  /**
   * @param {string} url - Url of lot on Telderi.
   * @param {string} source - Type of traffic source.
   * @returns {number} Extracted percents (from 0 to 100).
   */
  static percents(url, source) {
    const $ = Cheerio.load(Utils.html(url));
    const selector = "#seo_block [title='" + source + "']";

    return parseInt(
      $(selector).parent().children('.data-part').text().trim().split('/')[0]
    ) || 0;
  }
}
