class Utils {
  static extractInt(html, selectorStr) {
    // see: https://cheerio.js.org/
    const $ = Cheerio.load(html);
    return Utils.intFromSelector($(selectorStr));
  }
  
  static intFromSelector(selectorObj) {
    return parseInt(
      Utils.prepareText(selectorObj.text())
    ) || 0;
  }
  
  static prepareText(text) {
    return text.trim().replace(/\s/g, '');
  }
  
  static html(url) {
    return UrlFetchApp.fetch(url).getContentText();
  }
}
