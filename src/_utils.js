'use strict';
import * as _ from 'lodash';
import fs from 'fs';
import path from 'path';

export function getOption(optName) {
    return process.argv.indexOf('-' + optName) > -1 ? process.argv[process.argv.indexOf('-' + optName) + 1] : null;
}
    
export function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, filename), 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}



