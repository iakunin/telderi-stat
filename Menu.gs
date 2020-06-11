class Menu {
    /**
     * Parse Telderi lots by given search URL.
     */
    static parseLots() {
        const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = spreadsheet.insertSheet(new Date().toLocaleString('ru'));

        for (let row = 1; row <= 5; row++) {
            sheet.getRange(row, 1).setValue(row * 101);
        }
    }
}
