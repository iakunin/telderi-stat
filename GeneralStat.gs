/**
 * [Telderi] Get `pages in Yandex` attribute.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Pages in Yandex
 * @customfunction
 */
function Telderi_pagesInYandex(url) {
  return extractInt(html(url), '#auction_index_ya');
}


/**
 * [Telderi] Get `pages in Google` attribute.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Pages in Google
 * @customfunction
 */
function Telderi_pagesInGoogle(url) {
  return extractInt(html(url), '#auction_index_google');
}


/**
 * [Telderi] Get `site quality index` attribute.
 * For more info see:
 * https://yandex.ru/support/webmaster/site-quality-index.html
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Site quality index
 * @customfunction
 */
function Telderi_siteQualityIndex(url) {
  return extractInt(html(url), '#auction_sqi');
}


/**
 * [Telderi] Get `daily visitors` attribute.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Daily visitors
 * @customfunction
 */
function Telderi_dailyVisitors(url) {
  return extractInt(html(url), '#visits_month');
}


/**
 * [Telderi] Get `daily views` attribute.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Daily views
 * @customfunction
 */
function Telderi_dailyViews(url) {
  return extractInt(html(url), '#views_month');
}
