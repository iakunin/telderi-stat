class Menu {
    /**
     * Parse Telderi lots by given search URL.
     */
    static parseLots() {
        // Sets variables for "Review Data" sheet
        const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        spreadsheet.toast('Doing something important...');

        // var dataSheet = spreadsheet.getSheetByName('Review Data');
        // var rows = dataSheet.getDataRange();
        // var numRows = rows.getNumRows();
        // var values = rows.getValues();
        // var headerRow = values[0];

        // Checks to see if "Entity Sentiment Data" sheet is present, and
        // if not, creates a new sheet and sets the header row.
        // let entitySheet = spreadsheet.getSheetByName('Entity Sentiment Data');
        // if (entitySheet == null) {

        const sheet = spreadsheet.insertSheet(new Date().toLocaleString('ru'));
        // const esHeaderRange = sheet.getRange(1, 1, 1, 6);
        // const esHeader = [['Review ID', 'Entity', 'Salience', 'Sentiment Score',
        //         'Sentiment Magnitude', 'Number of mentions']];
        // esHeaderRange.setValues(esHeader);
        // // }

        // Finds the column index for comments, language_detected,
        // and comments_english columns.
        // var translationColumnIdx = headerRow.indexOf(COLUMN_NAME.TRANSLATION);
        // var entityColumnIdx = headerRow.indexOf(COLUMN_NAME.ENTITY);
        // var idColumnIdx = headerRow.indexOf(COLUMN_NAME.ID);
        // if (entityColumnIdx == -1) {
        //     Browser.msgBox('Error: Could not find the column named ' + COLUMN_NAME.ENTITY +
        //         '. Please create and empty column with header "entity_sentiment" '+
        //         'on the Review Data tab.');
        //     return; // bail
        // }


        for (let row = 0; row < 5; row++) {
            // .getCell(1, 1)
            sheet.getRange(1, row).setValue(row * 101);
        }

        // for (var i = 0; i < numRows; ++i) {
        //     var value = values[i];
        //     var commentEnCellVal = value[translationColumnIdx];
        //     var entityCellVal = value[entityColumnIdx];
        //     var reviewId = value[idColumnIdx];
        //
        //     // Calls retrieveEntitySentiment function for each row that has a comment
        //     // and also an empty entity_sentiment cell value.
        //     if (commentEnCellVal && !entityCellVal) {
        //         // Pastes each entity and sentiment score into Entity Sentiment Data sheet.
        //         var newValues = [];
        //         var entities = nlData.entities;
        //         entities.forEach(function(entity) {
        //             var row = [reviewId, entity.name, entity.salience, entity.sentiment.score,
        //                 entity.sentiment.magnitude, entity.mentions.length,
        //             ];
        //             newValues.push(row);
        //         });
        //         if (newValues.length) {
        //             sheet.getRange(sheet.getLastRow() + 1, 1, newValues.length,
        //                 newValues[0].length).setValues(newValues);
        //         }
        //         // Pastes "complete" into entity_sentiment column to denote completion of NL API call.
        //         dataSheet.getRange(i+1, entityColumnIdx+1).setValue('complete');
        //     }
        // }
    }
}
