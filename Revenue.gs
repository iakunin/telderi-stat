/**
 * [Telderi] Get `revenue from context ad` in percents.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Revenue from context ad in percents (from 0 to 100).
 * @customfunction
 */
function Telderi_revenueFromContext_percents(url) {
    return Revenue.percents(url, 'Контекстная реклама');
}

/**
 * [Telderi] Get `revenue from CPA` in percents.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {number} Revenue from CPA in percents (from 0 to 100).
 * @customfunction
 */
function Telderi_revenueFromCpa_percents(url) {
    return Revenue.percents(url, 'CPA (партнерские программы)');
}

class Revenue {
    /**
     * @param {string} url - Url of lot on Telderi.
     * @param {string} type - Type of revenue source.
     * @returns {number} Extracted percents (from 0 to 100).
     */
    static percents(url, type) {
        const $ = Cheerio.load(Utils.html(url));
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
            .reduce((a, b) => a + b, 0);
    }
}
