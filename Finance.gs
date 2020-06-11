/**
 * [Telderi] Get `gross revenue`.
 *
 * @param {"https://www.telderi.ru/ru/viewsite/1763121"} url Url of Telderi site.
 * @return Gross revenue
 * @customfunction
 */
function Telderi_grossRevenue(url) {
  const $ = Cheerio.load(html(url));
  return intFromSelector($('#gross_revenue > span').last());
}
