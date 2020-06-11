class Menu {
    /**
     * Parse Telderi lots by given search URL.
     */
    static parseLots() {
        const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = spreadsheet.insertSheet(new Date().toLocaleString('ru'));
        const PHPSESSID = PropertiesService.getScriptProperties().getProperty('PHPSESSID');
        const formData = 'YII_CSRF_TOKEN=&page=0&user_id=&website_type%5B0%5D=website&price%5Bfrom%5D=&price%5Bto%5D=50000&price_optimal%5Bfrom%5D=&price_optimal%5Bto%5D=100000&price_bliz%5Bfrom%5D=&price_bliz%5Bto%5D=&revenue%5Btotal%5D%5Bfrom%5D=&revenue%5Btotal%5D%5Bto%5D=&revenue%5Bthousand%5D%5Bfrom%5D=&revenue%5Bthousand%5D%5Bto%5D=&revenue%5Bprofit%5D%5Bfrom%5D=&revenue%5Bprofit%5D%5Bto%5D=&rec%5Bfrom%5D=&rec%5Bto%5D=&revenue%5Bprofit_confirm%5D=1&seo%5Bview_host%5D%5Bfrom%5D=100&seo%5Bview_host%5D%5Bto%5D=&seo%5Bview_hit%5D%5Bfrom%5D=&seo%5Bview_hit%5D%5Bto%5D=&trafic_type=1&seo%5Bindex_ya%5D%5Bfrom%5D=&seo%5Bindex_ya%5D%5Bto%5D=&seo%5Bindex_google%5D%5Bfrom%5D=&seo%5Bindex_google%5D%5Bto%5D=&seo%5Bsqi%5D%5Bfrom%5D=&seo%5Bsqi%5D%5Bto%5D=&seo%5Balexa%5D%5Bfrom%5D=&seo%5Balexa%5D%5Bto%5D=&without_sanctions=1&without_banRKN=1&soc%5Bsubscribers%5D%5Bfrom%5D=&soc%5Bsubscribers%5D%5Bto%5D=&soc%5Bpost_count%5D%5Bfrom%5D=&soc%5Bpost_count%5D%5Bto%5D=&soc%5Bstat_upload_by%5D=&zen%5Baudience%5D%5Bfrom%5D=&zen%5Baudience%5D%5Bto%5D=&content=1&age%5Bdomain%5D%5Bfrom%5D=&age%5Bdomain%5D%5Bto%5D=&age%5Bwebsite%5D%5Bfrom%5D=&age%5Bwebsite%5D%5Bto%5D=&domain_type%5B1%5D=com&domain_type%5B2%5D=info&domain_type%5B3%5D=org&domain_type%5B4%5D=biz&domain_type%5B7%5D=ru&domain_type%5B9%5D=net&domain_type%5B13%5D=other&domain_type_level=1&reg_panel=&sbk%5Btitle%5D=&sbk%5Bstop_keys_in_title%5D=&sbk%5Bstop_keys_in_desc%5D=&sbk%5Bstop_keys%5D=&sbk%5Burl%5D=&sbk%5Blength%5D%5Bfrom%5D=&sbk%5Blength%5D%5Bto%5D=&sbk%5Bexclude%5D=&exclude_al%5B464656%5D=464656&started=0&lang%5B1%5D=1&sortby=&sorttype=';
        const options = {
            'method' : 'post',
            'payload' : formData,
            'headers': {
                'cookie': `PHPSESSID=${PHPSESSID};`
            }
        };
        const html = UrlFetchApp.fetch('https://www.telderi.ru/ru/search', options).getContentText();
        console.info('HTML given', html);
        const $ = Cheerio.load(html);

        const links = $('.auction_table_title > a')
            .map((i, el) => $(el).attr('href'))
            .toArray();
        console.info('Links', links);

        for (const [key, value] of Object.entries(links)) {
            sheet.getRange(key + 1, 1).setValue(value);
        }
    }
}
