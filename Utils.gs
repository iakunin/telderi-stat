class Utils {
  /**
   * @param {string} url - Url of lot on Telderi.
   * @param {string} selectorStr - Selector string (in Cheerio format).
   *    For more info about Cheerio see: https://cheerio.js.org/.
   * @returns {number} Extracted integer by given selector.
   */
  static extractInt(url, selectorStr) {
    const $ = Cheerio.load(Utils.html(url));
    return Utils.intFromSelector($(selectorStr));
  }

  /**
   * @param {Object} selectorObj - Selector object (with `text()` method).
   * @returns {number} Integer extracted from selector.
   */
  static intFromSelector(selectorObj) {
    return parseInt(
      Utils.prepareText(selectorObj.text())
    ) || 0;
  }

  /**
   * @param {string} text - Text to prepare.
   * @returns {string} Prepared text.
   */
  static prepareText(text) {
    return text.trim().replace(/\s/g, '');
  }

  /**
   * @param {string} url - Source URL.
   * @returns {string} Content of an HTTP response encoded as a string.
   */
  static html(url) {
    return UrlFetchApp.fetch(url).getContentText();
  }
}
