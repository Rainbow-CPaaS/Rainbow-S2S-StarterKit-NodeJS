class DataHelper {
    constructor() {

    }

    static extractResponseSchemaData(responseBody) {
        return (responseBody !== null && responseBody !== 'undefined' && responseBody.hasOwnProperty('data')) ? responseBody.data : responseBody;
    }
}
module.exports = DataHelper;