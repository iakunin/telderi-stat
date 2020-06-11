class Menu {
    /**
     * Prompt for `Telderi > Parse a lots` menu item.
     */
    static parseLotsPrompt() {
        const ui = SpreadsheetApp.getUi();
        const result = ui.prompt('Paste Telderi search URL here:');
        if (result.getSelectedButton() === ui.Button.OK) {
            Menu.parseLots(result.getResponseText());
        }
    }

    /**
     * Parse Telderi lots by given search URL.
     * @param {string} url - Telderi search URL.
     */
    static parseLots(url) {
        const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = spreadsheet.insertSheet(new Date().toLocaleString('ru'));
        const PHPSESSID = PropertiesService.getScriptProperties().getProperty('PHPSESSID');

        const payload = JSON.parse(
            '{"' +
            decodeURI(url.split('#')[1])
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g,'":"') + '"}'
        );
        payload.page = 0;

        const allLinks = [];
        let allLinksLength = 0;

        do {
            allLinksLength = allLinks.length;
            let options = {
                'method': 'post',
                'payload': payload,
                'headers': {
                    'cookie': `PHPSESSID=${PHPSESSID};`
                }
            };
            let html = UrlFetchApp.fetch('https://www.telderi.ru/ru/search', options).getContentText();
            let $ = Cheerio.load(html);

            $('.auction_table_title > a')
                .map((i, el) => $(el).attr('href'))
                .toArray()
                .filter(link => !allLinks.includes(link))
                .forEach(link => allLinks.push(link));

            payload.page++;
        } while (allLinksLength !== allLinks.length)

        for (const [key, link] of Object.entries(allLinks)) {
            sheet.getRange(parseInt(key) + 1, 1).setValue(link);
        }
    }
}
