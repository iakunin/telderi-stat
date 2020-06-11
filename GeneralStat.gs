/**
 * [Telderi] Get `pages in Yandex` attribute.
 *
 * @param {string} url - Url of Telderi site.
 * @return {number} Pages in Yandex
 * @customfunction
 */
function Telderi_pagesInYandex(url) {
  return Utils.extractInt(Utils.html(url), '#auction_index_ya');
}


/**
 * [Telderi] Get `pages in Google` attribute.
 *
 * @param {string} url - Url of Telderi site.
 * @return {number} Pages in Google
 * @customfunction
 */
function Telderi_pagesInGoogle(url) {
  return Utils.extractInt(Utils.html(url), '#auction_index_google');
}


/**
 * [Telderi] Get `site quality index` attribute.
 * For more info see:
 * https://yandex.ru/support/webmaster/site-quality-index.html
 *
 * @param {string} url - Url of Telderi site.
 * @return {number} Site quality index
 * @customfunction
 */
function Telderi_siteQualityIndex(url) {
  return Utils.extractInt(Utils.html(url), '#auction_sqi');
}


/**
 * [Telderi] Get `daily visitors` attribute.
 *
 * @param {string} url - Url of Telderi site.
 * @return {number} Daily visitors
 * @customfunction
 */
function Telderi_dailyVisitors(url) {
  return Utils.extractInt(Utils.html(url), '#visits_month');
}


/**
 * [Telderi] Get `daily views` attribute.
 *
 * @param {string} url Url of Telderi site.
 * @return {number} Daily views
 * @customfunction
 */
function Telderi_dailyViews(url) {
  return Utils.extractInt(Utils.html(url), '#views_month');
}
