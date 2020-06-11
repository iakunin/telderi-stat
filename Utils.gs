function extractInt(html, selectorStr) {
  // see: https://cheerio.js.org/
  const $ = Cheerio.load(html);
  return intFromSelector($(selectorStr));
}

function intFromSelector(selectorObj) {
  return parseInt(
    prepareText(selectorObj.text())
  ) || 0;
}

function prepareText(text) {
  return text.trim().replace(/\s/g, '');
}


function html(url) {
  return UrlFetchApp.fetch(url).getContentText();
}
