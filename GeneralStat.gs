/**
 * [Telderi] Get `pages in Yandex` attribute.
 *
 * @param {string} url - Url of lot on Telderi.
 * @return {string} URL of lot's website.
 * @customfunction
 */
function Telderi_websiteUrl(url) {
  const PHPSESSID = PropertiesService.getScriptProperties().getProperty('PHPSESSID');
  const html = UrlFetchApp.fetch(
      url,
      {
        'headers': {
          'cookie': `PHPSESSID=${PHPSESSID};`
        }
      }
  ).getContentText();

  const $ = Cheerio.load(html);

  return $('#domen_url > a').first().attr('href');
}
