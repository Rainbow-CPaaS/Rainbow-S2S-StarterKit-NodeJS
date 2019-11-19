class ContactTools {

    constructor() {}
        /**
         * @public
         * @enum {string}
         * @readonly
         */

    //DEFAULT_AVATAR_URL="/resources/skins/rainbow/images/conversations/unknownContact.png";
    static createPassword(size) {
        var possible = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "?=.*[_~!@#\$%\^&\*\-\+=`\|\(\){}\[\]:;\"'<>,\.\?\/]", "0123456789"];
        var key = "";
        for (var i = 0; i < size - 4; i++) {
            var index = Math.floor(Math.random() * possible.length);
            key += possible[index].charAt(Math.floor(Math.random() * possible[index].length));
        }
        for (var i = 0; i < 4; i++) {
            key += possible[i].charAt(Math.floor(Math.random() * possible[i].length));
        }
        return key;
    }

    static isAdmin(roles) {
        return Array.isArray(roles) && roles.indexOf("admin") !== -1;
    }


    static isSuperAdmin(roles) {
        return Array.isArray(roles) && roles.indexOf("superadmin") !== -1;
    }

    static anonymizePhoneNumber(number) {
        if (number === null || typeof number === "undefined") {
            return null;
        }
        if (config && config.debug === true) {
            return number;
        }
        var result = "";

        if (number.indexOf("+") === 0) {
            result = "+";
        }

        if (number.length > 4) {
            result = result + "*".repeat(number.length - 4 - result.length) + number.slice(number.length - 4);
        } else {
            result = number;
        }
        return result;
    }
}
ContactTools.DEFAULT_AVATAR_URL="/resources/skins/rainbow/images/conversations/unknownContact.png";
ContactTools.AdminType = {
        /** Organization administrator */
        'ORGANIZATION_ADMIN': "organization_admin",
        /** Company administrator */
        'COMPANY_ADMIN': "company_admin",
        /** Site administrator */
        'SITE_ADMIN': "site_admin",
        /** No administrator right */
        'UNDEFINED': "undefined"
    };

    /**
     * @public
     * @enum {number}
     * @readonly
     */
ContactTools.NameUpdatePrio = {
        /* no update prio then could be updated*/
        'NO_UPDATE_PRIO': 0,
        /*prio associated to outlook name resolution update*/
        'OUTLOOK_UPDATE_PRIO': 1,
        /*prio associated to server name resolution (phonebook or office365AD ...) update*/
        'SERVER_UPDATE_PRIO': 2,
        /*max prio : no update could overwrite*/
        'MAX_UPDATE_PRIO': 99
    };

ContactTools.textAvatarColor = ["#ff4500", "#d38700", "#348833", "#007356", "#00b2a9", "#00b0e5", "#0085ca", "#6639b7", "#91278a", "#cf0072", "#a50034", "#d20000"];

module.exports = ContactTools;
