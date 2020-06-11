/**
 * [Telderi] Get `gross revenue`.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Gross revenue.
 * @customfunction
 */
function Telderi_grossRevenue(url) {
    const $ = Cheerio.load(Utils.html(url));
    return Utils.intFromSelector($('#gross_revenue > span').last());
}
