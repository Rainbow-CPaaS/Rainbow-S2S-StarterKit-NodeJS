"use strict";

const winston = require("winston");
const moment = require("moment-timezone");
const LOG_ID = "CHIEFBOT/LOG - ";
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, splat } = format;
const appendTimestamp = format((info, opts) => {
    if (opts.tz)
        info.timestamp = moment().tz(opts.tz).format('YYYY-MM-DD HH:mm:ss');
    return info;
});

const myFormat = printf((info) => {
    if (info.meta && info.meta instanceof Error) {
        return `${info.timestamp} ${info.level} ${info.message} : ${info.meta.stack}`;
    }
    return `${info.timestamp} ${info.level}: ${info.message}`;
});
/*
Object.defineProperty(global, '__stack', {
    get: function() {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack) {
            return stack;
        };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function() {
        return __stack[1].getLineNumber();
    }
});

Object.defineProperty(global, '__function', {
    get: function() {
        return __stack[1].getFunctionName();
    }
});
*/
const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
var that = null;
class Logger {

    constructor(filename) {
        var p = /^\s*^$/;
        this._jsfilename = '';
        var rootPath = process.mainModule.paths[0].split(/\bnode_modules\b/)[0].slice(0, -1);
        if (!p.test(filename)) {
            this._jsfilename = filename.replace(rootPath, '');
        }

        this._LOG_ID = '';
        that = this;
        this._tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this._logger = createLogger({
            transports: [
                new(transports.Console)({
                    level: LOG_LEVEL,
                    format: combine(
                        colorize(),
                        appendTimestamp({ tz: this._tz }),
                        splat(),
                        myFormat
                    )
                })
            ]
        });
    }

    setId(logId) {
        this._LOG_ID = logId;
    }

    enter(message) {
        this._logger.log('info', '[' + this._jsfilename + '] IN :' + message);
    }
    exit(message) {
        this._logger.log('info', '[' + this._jsfilename + '] OUT :' + message);
    }
    exitWithError(message) {
        this._logger.log('error', '[' + this._jsfilename + '] OUT :' + message);
    }
    info(message) {
        this._logger.log('info', '[' + this._jsfilename + '] ' + message);
    }
    warn(message) {
        this._logger.log('warn', '[' + this._jsfilename + '] ' + message);
    }

    debug(message) {
        if (typeof message == 'Object') {
            this._logger.log('debug', '[' + this._jsfilename + '] ' + JSON.stringify(message, null, 2));
        } else {
            this._logger.log('debug', '[' + this._jsfilename + '] ' + message);
        }

    }

    debug(funcname, message) {
        if (typeof message == 'Object') {
            this._logger.log('debug', '[' + this._jsfilename + '][' + funcname + '] ' + JSON.stringify(message, null, 2));
        } else {
            this._logger.log('debug', '[' + this._jsfilename + '][' + funcname + '] ' + message);
        }

    }
    error(message) {
        this._logger.log('error', '[' + this._jsfilename + '] ' + message);
    }
    fatal(message) {
        this._logger.log('fatal', '[' + this._jsfilename + '] ' + message);
    }
}

module.exports = (filename) => {
    return new Logger(filename);
}