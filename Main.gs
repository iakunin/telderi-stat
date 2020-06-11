/**
 * Creates a Telderi menu in Google Spreadsheets.
 */
function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('Telderi')
        .addItem('Parse a lots', 'Menu.parseLots')
        .addToUi();
}
